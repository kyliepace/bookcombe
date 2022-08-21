import * as Types from '../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { BooleanFragmentDoc, ImageFragmentDoc } from '../fragments/content.generated';
export type BookQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BookQuery = (
  { __typename?: 'Query' }
  & { books?: Types.Maybe<(
    { __typename?: 'Document' }
    & { children?: Types.Maybe<Array<(
      { __typename?: 'Document' }
      & Pick<Types.Document, 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    ) | (
      { __typename?: 'Folder' }
      & Pick<Types.Folder, 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    ) | (
      { __typename: 'Product' }
      & Pick<Types.Product, 'name' | 'path' | 'id'>
      & { defaultVariant?: Types.Maybe<(
        { __typename?: 'ProductVariant' }
        & Pick<Types.ProductVariant, 'price'>
        & { firstImage?: Types.Maybe<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
          )>> }
        )> }
      )>, topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    )>> }
  ) | (
    { __typename?: 'Folder' }
    & { children?: Types.Maybe<Array<(
      { __typename?: 'Document' }
      & Pick<Types.Document, 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    ) | (
      { __typename?: 'Folder' }
      & Pick<Types.Folder, 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    ) | (
      { __typename: 'Product' }
      & Pick<Types.Product, 'name' | 'path' | 'id'>
      & { defaultVariant?: Types.Maybe<(
        { __typename?: 'ProductVariant' }
        & Pick<Types.ProductVariant, 'price'>
        & { firstImage?: Types.Maybe<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
          )>> }
        )> }
      )>, topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    )>> }
  ) | (
    { __typename?: 'Product' }
    & { children?: Types.Maybe<Array<(
      { __typename?: 'Document' }
      & Pick<Types.Document, 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    ) | (
      { __typename?: 'Folder' }
      & Pick<Types.Folder, 'id'>
      & { topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    ) | (
      { __typename: 'Product' }
      & Pick<Types.Product, 'name' | 'path' | 'id'>
      & { defaultVariant?: Types.Maybe<(
        { __typename?: 'ProductVariant' }
        & Pick<Types.ProductVariant, 'price'>
        & { firstImage?: Types.Maybe<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'key' | 'width' | 'height' | 'size'>
          )>> }
        )> }
      )>, topics?: Types.Maybe<Array<(
        { __typename?: 'Topic' }
        & Pick<Types.Topic, 'name'>
      )>>, bundle?: Types.Maybe<(
        { __typename?: 'Component' }
        & { content?: Types.Maybe<(
          { __typename: 'BooleanContent' }
          & Pick<Types.BooleanContent, 'value'>
        ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | { __typename?: 'DatetimeContent' } | { __typename?: 'FileContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
      )> }
    )>> }
  )> }
);


export const BookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"books"},"name":{"kind":"Name","value":"catalogue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/shop","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"StringValue","value":"en","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"topics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"bundle"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"bundle","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"boolean"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]}}]}},...BooleanFragmentDoc.definitions,...ImageFragmentDoc.definitions]} as unknown as DocumentNode<BookQuery, BookQueryVariables>;