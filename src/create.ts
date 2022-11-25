import * as swc from '@swc/core'

function getKey(identifer: string | swc.Identifier) {
  return (typeof identifer == 'string') ? createIdentifer(identifer): identifer
}

function createStringLiteralValue(value: string | swc.StringLiteral) {
  return (typeof value == 'string') ? createStringLiteral(value): value
}

export function createSpan(span: swc.Span = { start: 0, end: 0, ctxt: 0 }) {
  return span
}

export function createIdentifer(value: string) {
  const object: swc.Identifier = {
    span: createSpan(),
    type: 'Identifier',
    value,
    optional: false
  }
  return object
}

export function createStringLiteral(value: string) {
  const object = {
    type: 'StringLiteral',
    span: createSpan(),
    value,
    raw: `'${value}'`,
    hasEscape: false
  } as swc.StringLiteral & { raw?: string }
  return object
}

export function createMemberExpression(
  object: swc.Identifier 
    | swc.ThisExpression 
    | swc.MemberExpression, 
  property: swc.Identifier) {
  const result: swc.MemberExpression = {
    type: 'MemberExpression',
    span: createSpan(),
    object,
    property
  }
  return result
}

export function createCallExpression(callee: swc.Expression | swc.Identifier | swc.Super | swc.Import, args: swc.Argument[] = []) {
  const object: swc.CallExpression = {
    type: 'CallExpression',
    span: createSpan(),
    callee,
    arguments: args
  }
  return object
}

export function createExpressionStatement(expression: swc.Expression) {
  const statement: swc.ExpressionStatement = {
    type: 'ExpressionStatement',
    span: createSpan(),
    expression
  }
  return statement
}

export function createAssignmentExpression(left: swc.Expression, right: swc.Expression) {
  const expression: swc.AssignmentExpression = {
    type: 'AssignmentExpression',
    span: createSpan(),
    operator: '=',
    left,
    right
  }
  return expression
}

export function createImportDefaultSpecifier(identifer: string | swc.Identifier) {
  const specifier: swc.ImportDefaultSpecifier = {
    type: 'ImportDefaultSpecifier',
    span: createSpan(),
    local: getKey(identifer),
  }
  return specifier
}

export function createImportSpecifier(identifer: string | swc.Identifier) {
  const specifier = {
    type: 'ImportSpecifier',
    span: createSpan(),
    local: getKey(identifer)
  } as swc.ImportSpecifier
  return specifier
}

export function createNamedImportSpecifier(local: string | swc.Identifier, imported: string | swc.Identifier) {
  return { ...createImportSpecifier(local), imported: getKey(imported) } as swc.NamedImportSpecifier
}

export function createArrayExpression(elements: swc.ExprOrSpread[]) {
  const expression: swc.ArrayExpression = {
    type: 'ArrayExpression',
    span: createSpan(),
    elements
  }
  return expression
}

export function createKeyValueProperty(identifer: string | swc.Identifier, expression: swc.Expression) {
  const props: swc.KeyValueProperty = { 
    type: 'KeyValueProperty',
    key: getKey(identifer),
    value: expression
  }
  return props
}

export function createObjectExpression(properties: (swc.Property | swc.SpreadElement)[]) {
  const argument: swc.ObjectExpression = {
    type: 'ObjectExpression',
    span: createSpan(),
    properties
  }
  return argument
}

export function createReturnStatement(expression: swc.Expression) {
  const statement: swc.ReturnStatement = {
    type: 'ReturnStatement',
    span: createSpan(),
    argument: expression
  }
  return statement
}

export function createBlockStatement(statements: swc.Statement[]) {
  const statement: swc.BlockStatement = {
    type: 'BlockStatement',
    span: createSpan(),
    stmts: statements || []
  }
  return statement
}

export function updateImportDeclaration(node: swc.ImportDeclaration, 
  source: swc.StringLiteral, 
  specifiers: (swc.ImportSpecifier | swc.ImportDefaultSpecifier)[]
) {
  const imports = {
    type: 'ImportDeclaration',
    span: createSpan(),
    source,
    specifiers: [ ...(node?.specifiers || []), ...specifiers ],
    typeOnly: false,
    hasEscape: false
  }
  return imports as swc.ImportDeclaration
}

export function createThisExpression() {
  const expression: swc.ThisExpression = {
    type: 'ThisExpression',
    span: createSpan()
  }
  return expression
}

export function createGetter(key: swc.Identifier, 
  body: swc.BlockStatement, 
  decorators: swc.Decorator[] = []
) {
  const expression: swc.ClassMethod = {
    type: 'ClassMethod',
    span: createSpan(),
    key,
    function: createFunction(body, [], decorators),
    kind: 'getter',
    isStatic: false,
    accessibility: null,
    isAbstract: false,
    isOptional: false,
    isOverride: false
  }
  return expression
}

export function createFunction(body: swc.BlockStatement, 
  params: swc.Param[] = [], 
  decorators: swc.Decorator[] = []
) {
  const expression: swc.Fn = {
    params,
    decorators,
    span: createSpan(),
    body,
    generator: false,
    async: false,
    typeParameters: null,
    returnType: null
  }
  return expression
}

export function createTemplateElement(value: string, isNewSyntax: boolean = false) {
  const literal = isNewSyntax ? value: createStringLiteral(value)
  const template = {
    type: 'TemplateElement',
    span: createSpan(),
    tail: true,
    cooked: literal,
    raw: literal
  } as swc.TemplateElement
  return template
}

export function createTemplateLiteral(quasis: swc.TemplateElement[], expressions: swc.Expression[] = []) {
  const template = {
    type: 'TemplateLiteral',
    span: createSpan(),
    expressions,
    quasis
  } as swc.TemplateLiteral
  return template
}

export function createTaggedTemplateExpression(tag: swc.Identifier, template: swc.TemplateLiteral) {
  const result = {
    type: 'TaggedTemplateExpression',
    span: createSpan(),
    tag,
    template
  } as swc.TaggedTemplateExpression
  return result
}

export function createDecorator(expression: swc.CallExpression) {
  const result: swc.Decorator = {
    type: 'Decorator',
    span: createSpan(),
    expression
  }
  return result
}

export interface ClassPropertyOptions {
  isStatic?: boolean
  typeAnnotation?: swc.TsTypeAnnotation
  isAbstract?: boolean
  isOptional?: boolean
  isOverride?: false
  readonly?: false
}

export function createClassProperty(key: string | swc.Identifier, value: swc.Expression, options?: ClassPropertyOptions) {
  const property = {
    type: 'ClassProperty',
    span: createSpan(),
    key: getKey(key),
    value,
    ...(options || {})
  } as swc.ClassProperty & ClassPropertyOptions
  return property 
}

export function createExportDefaultDeclaration(decl: swc.DefaultDecl) {
  return {
    type: 'ExportDefaultDeclaration',
    decl
  } as swc.ExportDefaultDeclaration
}

export function createClassExpression(
  identifer: string | swc.Identifier,
  body: swc.ClassMember[],
  decorators?: swc.Decorator[],
  superClass?: swc.Expression
) {
  return {
    type: 'ClassExpression',
    span: createSpan(),
    identifier: getKey(identifer),
    body,
    decorators,
    superClass
  } as swc.ClassExpression
}

export function createExportDefaultClassExpression(  
  identifer: string | swc.Identifier,
  body: swc.ClassMember[],
  decorators?: swc.Decorator[],
  superClass?: swc.Expression
) {
  return createExportDefaultDeclaration(
    createClassExpression(
      identifer, 
      body, 
      decorators, 
      superClass
    ))
}

export function createExportDefaultExpression(expression: string | swc.Identifier) {
  return {
    type: 'ExportDefaultExpression',
    span: createSpan(),
    expression: getKey(expression)
  } as swc.ExportDefaultExpression
}

export function createVariableDeclarator(id: string | swc.Identifier, definite: boolean, init?: swc.Expression) {
  return {
    type: 'VariableDeclarator',
    span: createSpan(),
    id: getKey(id)
  } as swc.VariableDeclarator
}

export function createVariableDeclaration(kind: swc.VariableDeclarationKind, declare: boolean, declarations: swc.VariableDeclarator[]) {
  return {
    type: 'VariableDeclaration',
    span: createSpan(),
    kind,
    declare,
    declarations
  } as swc.VariableDeclaration
}

export function createImportDeclaration(specifiers: swc.ImportSpecifier[], source: string | swc.StringLiteral) {
  return {
    type: 'ImportDeclaration',
    span: createSpan(),
    specifiers,
    source: createStringLiteralValue(source)
  } as swc.ImportDeclaration
}

export function createConstructor(body: swc.BlockStatement, params: swc.Param[] = []) {
  return {
    type: 'Constructor',
    span: createSpan(),
    key: createIdentifer('constructor'),
    params,
    body
  } as swc.Constructor
}

export function createNullLiteral() {
  return { type: 'NullLiteral', span: createSpan() } as swc.NullLiteral
}

export function createSuper(args?: swc.Expression) {
  return { type: 'Super', span: createSpan() } as swc.Super
}

export function createOptionalChainingExpression(base: swc.Expression) {
  return {
    type: 'OptionalChainingExpression',
    span: createSpan(),
    questionDotToken: createSpan(),
    base,
  } as swc.OptionalChainingExpression
}