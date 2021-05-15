import * as sinon from 'sinon'
import Visitor from '@swc/core/Visitor'

import type { Plugin, Program, ClassDeclaration, ImportDeclaration, ExpressionStatement } from '@swc/core'
import { transformSync, plugins } from '@swc/core'

import { expect } from 'aria-mocha'

import * as index from './index'

describe('index', () => {
  let code: string, visitor: (program: Program) => Program

  function transformer(code: string, transformers?: Plugin[]) {
    return transformSync(code, {
      jsc: {
        parser: {
          syntax: 'typescript',
          decorators: true,
          dynamicImport: true,
          tsx: true
        },
        target: 'es2020'
      },
      plugin: plugins(transformers || [])
    })
  }

  before(() => {
    const css = 'css ``'

    code = `
    import { LitElement } from 'lit'

    @customElement('hello-world')
    class HelloWorld extends LitElement { 

      @property() size: Size = 'small'
      @property({ type: Boolean }) disabled: boolean = false

      static get styles() {
        return ${css}
      }

    }
    
    customElements.define('hello-world', HelloWorld)  
    `

    class HelperVisitor extends Visitor {
      
      visitImportDeclaration(e: ImportDeclaration) {
        if (index.isImportDeclaration(e)) {
          e.specifiers.forEach(specfier => {
            if (index.isImportSpecifier(specfier)) { }
          })
          if (index.isStringLiteral(e)) { }
        }
        return e
      }

      visitClassDeclartion(e: ClassDeclaration) {
        if (index.isClasDeclaration(e)) { 
          e.decorators = e.decorators.filter(decorator => {
            return index.isDecorator(decorator)
          })
          e.body.forEach(element => {
            if (index.isClassProperty(element)) {
              if (index.isTsTypeAnnotation(element.typeAnnotation) 
                && index.isTsTypeReference(element.typeAnnotation.typeAnnotation)) { }
              element.decorators.forEach(decorator => {
                if (index.isCallExpression(decorator.expression)) {
                  decorator.expression.arguments.forEach(arg => {
                    if (index.isObjectExpression(arg.expression)) {
                      arg.expression.properties.forEach(property => {
                        if (index.isKeyValueProperty(property)) { }
                      })
                    }
                  })
                }
              })
            }
            if (index.isClassMethod(element) && index.isIdentifer(element.key)) { 
              if (index.isBlockStatement(element.function.body)) {
                element.function.body.stmts.forEach(stmt => {
                  if (index.isReturnStatement(stmt) 
                    && index.isTaggedTemplateExpression(stmt.argument)
                    && index.isTemplateLiteral(stmt.argument.template)) {
                      stmt.argument.template.quasis.forEach(quasi => {
                        if (index.isTemplateElement(quasi)) { }
                      })
                  }
                })
              }
            }
          })
        }      
        return e
      }

      visitExpressionStatement(e: ExpressionStatement) {
        if (index.isExpressionStatement(e)) { 
          if (index.isCallExpression(e.expression)) { 
            if (index.isMemberExpression(e.expression.callee)) {

            }
          }
        }
        return e
      }

    }
    
    visitor = (program: Program) => new HelperVisitor().visitProgram(program)
  })

  after(() => {
    sinon.restore()
  })
  
  it('should be ClassDeclaration', () => {
    const spy = sinon.spy(index, 'isClasDeclaration')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()   
  })

  it('should be ImportDeclaration', () => {
    const spy = sinon.spy(index, 'isImportDeclaration')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()   
  })  

  it('should be CallExpression', () => {
    const spy = sinon.spy(index, 'isCallExpression')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()   
  })

  it('should be Decorator', () => {
    const spy = sinon.spy(index, 'isDecorator')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()   
  })

  it('should be StringLiteral', () => {
    const spy = sinon.spy(index, 'isStringLiteral')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()   
  })

  it('shoould be ClassMethod', () => {
    const spy = sinon.spy(index, 'isClassMethod')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be Identifier', () => {
    const spy = sinon.spy(index, 'isIdentifer')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be ImportSpecifier', () => {
    const spy = sinon.spy(index, 'isImportSpecifier')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be MemberExpression', () => {
    const spy = sinon.spy(index, 'isMemberExpression')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be ExpressionStatement', () => {
    const spy = sinon.spy(index, 'isExpressionStatement')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be ReturnStatement', () => {
    const spy = sinon.spy(index, 'isReturnStatement')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be TaggedTemplateExpression', () => {
    const spy = sinon.spy(index, 'isTaggedTemplateExpression')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be TemplateLiteral', () => {
    const spy = sinon.spy(index, 'isTemplateLiteral')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be TemplateElement', () => {
    const spy = sinon.spy(index, 'isTemplateElement')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be BlockStatement', () => {
    const spy = sinon.spy(index, 'isBlockStatement')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be ClassProperty', () => {
    const spy = sinon.spy(index, 'isClassProperty')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be ObjectExpression', () => {
    const spy = sinon.spy(index, 'isObjectExpression')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be KeyValueProperty', () => {
    const spy = sinon.spy(index, 'isKeyValueProperty')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be TsTypeAnnotation', () => {
    const spy = sinon.spy(index, 'isTsTypeAnnotation')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

  it('shoould be TsTypeReference', () => {
    const spy = sinon.spy(index, 'isTsTypeReference')
    transformer(code, [ visitor ])

    expect(spy.called).toBeTrue()    
  })

})