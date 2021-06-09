import * as swc from '@swc/core'

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