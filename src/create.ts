import * as swc from '@swc/core'

function getKey(identifer: string | swc.Identifier) {
  return (typeof identifer == 'string') ? createIdentifer(identifer): identifer
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
  const object: swc.StringLiteral = {
    type: 'StringLiteral',
    span: createSpan(),
    value,
    has_escape: false
  }
  return object
}

export function createMemberExpression(object: swc.Identifier, property: swc.Identifier) {
  const result: swc.MemberExpression = {
    type: 'MemberExpression',
    span: createSpan(),
    object,
    property,
    computed: false
  }
  return result
}

export function createCallExpression(callee: swc.MemberExpression, args: swc.Argument[] = []) {
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

export function createAssingmentExpression(left: swc.Expression, right: swc.Expression) {
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

export function createArrayExpression(elements: swc.ExprOrSpread[]) {
  const expression: swc.ArrayExpression =       {
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