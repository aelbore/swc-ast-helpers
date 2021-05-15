import type {
  Node,
  ImportDeclaration, 
  ClassDeclaration,
  CallExpression,
  Decorator,
  StringLiteral,
  ClassMethod,
  Identifier,
  ImportSpecifier,
  MemberExpression,
  ExpressionStatement,
  ReturnStatement,
  TaggedTemplateExpression,
  TemplateLiteral,
  BlockStatement,
  TemplateElement,
  ClassProperty,
  ObjectExpression,
  KeyValueProperty,
  TsTypeAnnotation,
  TsTypeReference
} from '@swc/core'

const TYPES = Object.freeze({
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
  TsTypeReference: 'TsTypeReference'
})


export function isImportDeclaration(node: Node): node is ImportDeclaration {
  return node.type === TYPES.ImportDeclaration
}

export function isClasDeclaration(node: Node): node is ClassDeclaration {
  return node.type === TYPES.ClassDeclaration
}

export function isDecorator(node: Node): node is Decorator {
  return node.type === TYPES.Decorator
}

export function isCallExpression(node: Node): node is CallExpression {
  return node.type === TYPES.CallExpression
}

export function isStringLiteral(node: Node): node is StringLiteral {
  return node.type === TYPES.StringLiteral
}

export function isClassMethod(node: Node): node is ClassMethod {
  return node.type === TYPES.ClassMethod
}

export function isIdentifer(node: Node): node is Identifier {
  return node.type === TYPES.Identifier
}

export function isImportSpecifier(node: Node): node is ImportSpecifier {
  return node.type === TYPES.ImportSpecifier
}

export function isMemberExpression(node: Node): node is MemberExpression {
  return node.type === TYPES.MemberExpression
}

export function isExpressionStatement(node: Node): node is ExpressionStatement {
  return node.type === TYPES.ExpressionStatement
}

export function isReturnStatement(node: Node): node is ReturnStatement {
  return node.type === TYPES.ReturnStatement
}

export function isTaggedTemplateExpression(node: Node): node is TaggedTemplateExpression {
  return node.type === TYPES.TaggedTemplateExpression
}

export function isTemplateLiteral(node: Node): node is TemplateLiteral {
  return node.type === TYPES.TemplateLiteral
}

export function isTemplateElement(node: Node): node is TemplateElement {
  return node.type === TYPES.TemplateElement
} 

export function isBlockStatement(node: Node): node is BlockStatement {
  return node.type === TYPES.BlockStatement
}

export function isClassProperty(node: Node): node is ClassProperty {
  return node.type === TYPES.ClassProperty
}

export function isObjectExpression(node: Node): node is ObjectExpression {
  return node.type === TYPES.ObjectExpression
}

export function isKeyValueProperty(node: Node): node is KeyValueProperty {
  return node.type === TYPES.KeyValueProperty
}

export function isTsTypeAnnotation(node: Node): node is TsTypeAnnotation {
  return node.type === TYPES.TsTypeAnnotation
}

export function isTsTypeReference(node: Node): node is TsTypeReference {
  return node.type === TYPES.TsTypeReference
}