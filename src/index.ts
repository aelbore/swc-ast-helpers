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
  ExportDefaultDeclaration: 'ExportDefaultDeclaration',
  ExportDefaultExpression: 'ExportDefaultExpression',
  ImportDefaultSpecifier: 'ImportDefaultSpecifier',
  AssignmentExpression: 'AssignmentExpression',
  ArrayExpression: 'ArrayExpression',
  VariableDeclaration: 'VariableDeclaration',
  VariableDeclarator: 'VariableDeclarator',
  Constructor: 'Constructor',
  Parameter: 'Parameter',
  NullLiteral: 'NullLiteral',
  Super: 'Super',
  ParenthesisExpression: 'ParenthesisExpression',
  ArrowFunctionExpression: 'ArrowFunctionExpression',
})

export * from './create'

export function isParenthesisExpression(node: swc.Node): node is swc.ParenthesisExpression {
  return node?.type === TYPES.ParenthesisExpression
}

export function isArrowFunctionExpression(node: swc.Node): node is swc.ArrowFunctionExpression {
  return node?.type === TYPES.ArrowFunctionExpression
}

export function isSuper(node: swc.Node): node is swc.Super {
  return node?.type === TYPES.Super
}

export function isExportDefaultDeclaration(node: swc.Node): node is swc.ExportDefaultDeclaration {
  return node?.type === TYPES.ExportDefaultDeclaration
}

export function isVariableDeclarator(node: swc.Node): node is swc.VariableDeclarator {
  return node?.type === TYPES.VariableDeclarator
}

export function isVariableDeclaration(node: swc.Node): node is swc.VariableDeclaration {
  return node?.type === TYPES.VariableDeclaration
}

export function isExportDefaultExpression(node: swc.Node): node is swc.ExportDefaultExpression {
  return node?.type === TYPES.ExportDefaultExpression
}

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

export function isConstructor(node: swc.Node): node is swc.Constructor  {
  return node?.type === TYPES.Constructor
}

export function isParameter(node: swc.Node): node is swc.Param {
  return node?.type === TYPES.Parameter
}

export function isNullLiteral(node: swc.Node): node is swc.NullLiteral {
  return node?.type === TYPES.NullLiteral
}