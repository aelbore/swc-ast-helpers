import * as swc from '@swc/core'

export const TYPES = Object.freeze({
  CallExpression: 'CallExpression',
  ClassDeclaration: 'ClassDeclaration',
  Decorator: 'Decorator',
  ImportDeclaration: 'ImportDeclaration',
  StringLiteral: 'StringLiteral',
  ClassMethod: 'ClassMethod',
  Identifier:  'Identifier',
  ImportSpecifier: 'ImportSpecifier',
  MemberExpression: 'MemberExpression',
  ExpressionStatement: 'ExpressionStatement',
  ReturnStatement: 'ReturnStatement',
  TaggedTemplateExpression: 'TaggedTemplateExpression',
  TemplateLiteral: 'TemplateLiteral',
  BlockStatement: 'BlockStatement',
  TemplateElement: 'TemplateElement',
  ClassProperty: 'ClassProperty',
  ObjectExpression: 'ObjectExpression',
  KeyValueProperty: 'KeyValueProperty',
  TsTypeAnnotation: 'TsTypeAnnotation',
  TsTypeReference: 'TsTypeReference',
  ExportDeclaration: 'ExportDeclaration',
  ImportDefaultSpecifier: 'ImportDefaultSpecifier',
  AssignmentExpression: 'AssignmentExpression',
  ArrayExpression: 'ArrayExpression'
})

export * from './create'

export function isExportDeclaration(node: swc.Node): node is swc.ExportDeclaration {
  return node?.type === TYPES.ExportDeclaration
}

export function isImportDeclaration(node: swc.Node): node is swc.ImportDeclaration {
  return node?.type === TYPES.ImportDeclaration
}

export function isClasDeclaration(node: swc.Node): node is swc.ClassDeclaration {
  return node?.type === TYPES.ClassDeclaration
}

export function isDecorator(node: swc.Node): node is swc.Decorator {
  return node?.type === TYPES.Decorator
}

export function isCallExpression(node: swc.Node): node is swc.CallExpression {
  return node?.type === TYPES.CallExpression
}

export function isStringLiteral(node: swc.Node): node is swc.StringLiteral {
  return node?.type === TYPES.StringLiteral
}

export function isClassMethod(node: swc.Node): node is swc.ClassMethod {
  return node?.type === TYPES.ClassMethod
}

export function isIdentifer(node: swc.Node): node is swc.Identifier {
  return node?.type === TYPES.Identifier
}

export function isImportSpecifier(node: swc.Node): node is swc.ImportSpecifier {
  return node?.type === TYPES.ImportSpecifier
}

export function isImportDefaultSpecifier(node: swc.Node): node is swc.ImportDefaultSpecifier {
  return node?.type == TYPES.ImportDefaultSpecifier
}

export function isMemberExpression(node: swc.Node): node is swc.MemberExpression {
  return node?.type === TYPES.MemberExpression
}

export function isExpressionStatement(node: swc.Node): node is swc.ExpressionStatement {
  return node?.type === TYPES.ExpressionStatement
}

export function isReturnStatement(node: swc.Node): node is swc.ReturnStatement {
  return node?.type === TYPES.ReturnStatement
}

export function isTaggedTemplateExpression(node: swc.Node): node is swc.TaggedTemplateExpression {
  return node?.type === TYPES.TaggedTemplateExpression
}

export function isTemplateLiteral(node: swc.Node): node is swc.TemplateLiteral {
  return node?.type === TYPES.TemplateLiteral
}

export function isTemplateElement(node: swc.Node): node is swc.TemplateElement {
  return node?.type === TYPES.TemplateElement
} 

export function isBlockStatement(node: swc.Node): node is swc.BlockStatement {
  return node?.type === TYPES.BlockStatement
}

export function isClassProperty(node: swc.Node): node is swc.ClassProperty {
  return node?.type === TYPES.ClassProperty
}

export function isObjectExpression(node: swc.Node): node is swc.ObjectExpression {
  return node?.type === TYPES.ObjectExpression
}

export function isKeyValueProperty(node: swc.Node): node is swc.KeyValueProperty {
  return node?.type === TYPES.KeyValueProperty
}

export function isTsTypeAnnotation(node: swc.Node): node is swc.TsTypeAnnotation {
  return node?.type === TYPES.TsTypeAnnotation
}

export function isTsTypeReference(node: swc.Node): node is swc.TsTypeReference {
  return node?.type === TYPES.TsTypeReference
}

export function isAssignmentExpression(node: swc.Node): node is swc.AssignmentExpression {
  return node?.type === TYPES.AssignmentExpression
}

export function isArrayExpression(node: swc.Node): node is swc.ArrayExpression {
  return node?.type === TYPES.ArrayExpression
}