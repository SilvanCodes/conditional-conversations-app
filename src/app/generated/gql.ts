import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
};
















export type MessageOrder = {
  asc?: Maybe<MessageOrderable>;
  desc?: Maybe<MessageOrderable>;
  then?: Maybe<MessageOrder>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  nickname: Scalars['String'];
  initiatedConversations: Array<Conversation>;
  receivedConversations: Array<Conversation>;
  initiatedConversationsAggregate?: Maybe<ConversationAggregateResult>;
  receivedConversationsAggregate?: Maybe<ConversationAggregateResult>;
};


export type UserInitiatedConversationsArgs = {
  filter?: Maybe<ConversationFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type UserReceivedConversationsArgs = {
  filter?: Maybe<ConversationFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type UserInitiatedConversationsAggregateArgs = {
  filter?: Maybe<ConversationFilter>;
};


export type UserReceivedConversationsAggregateArgs = {
  filter?: Maybe<ConversationFilter>;
};

export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  rule?: Maybe<Scalars['String']>;
};

export type NearFilter = {
  distance: Scalars['Float'];
  coordinate: PointRef;
};

export type MessageFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  has?: Maybe<MessageHasFilter>;
  and?: Maybe<Array<Maybe<MessageFilter>>>;
  or?: Maybe<Array<Maybe<MessageFilter>>>;
  not?: Maybe<MessageFilter>;
};

export type AddConversationInput = {
  messages: Array<MessageRef>;
  initiator: UserRef;
  recipient: UserRef;
};

export type UpdateUserInput = {
  filter: UserFilter;
  set?: Maybe<UserPatch>;
  remove?: Maybe<UserPatch>;
};

export type Int64Range = {
  min: Scalars['Int64'];
  max: Scalars['Int64'];
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type DeleteConversationPayload = {
  __typename?: 'DeleteConversationPayload';
  conversation?: Maybe<Array<Maybe<Conversation>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteConversationPayloadConversationArgs = {
  filter?: Maybe<ConversationFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum MessageHasFilter {
  Conversation = 'conversation',
  Sender = 'sender',
  Text = 'text'
}

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type ConversationFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  has?: Maybe<ConversationHasFilter>;
  and?: Maybe<Array<Maybe<ConversationFilter>>>;
  or?: Maybe<Array<Maybe<ConversationFilter>>>;
  not?: Maybe<ConversationFilter>;
};

export type PointRef = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type IntRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type FloatFilter = {
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<FloatRange>;
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export type Conversation = {
  __typename?: 'Conversation';
  id: Scalars['ID'];
  messages: Array<Message>;
  initiator: User;
  recipient: User;
  messagesAggregate?: Maybe<MessageAggregateResult>;
};


export type ConversationMessagesArgs = {
  filter?: Maybe<MessageFilter>;
  order?: Maybe<MessageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ConversationInitiatorArgs = {
  filter?: Maybe<UserFilter>;
};


export type ConversationRecipientArgs = {
  filter?: Maybe<UserFilter>;
};


export type ConversationMessagesAggregateArgs = {
  filter?: Maybe<MessageFilter>;
};


export type AddMessagePayload = {
  __typename?: 'AddMessagePayload';
  message?: Maybe<Array<Maybe<Message>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddMessagePayloadMessageArgs = {
  filter?: Maybe<MessageFilter>;
  order?: Maybe<MessageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum UserOrderable {
  Nickname = 'nickname'
}

export type AddConversationPayload = {
  __typename?: 'AddConversationPayload';
  conversation?: Maybe<Array<Maybe<Conversation>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddConversationPayloadConversationArgs = {
  filter?: Maybe<ConversationFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UserAggregateResult = {
  __typename?: 'UserAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nicknameMin?: Maybe<Scalars['String']>;
  nicknameMax?: Maybe<Scalars['String']>;
};

export type AddMessageInput = {
  conversation: ConversationRef;
  sender: UserRef;
  text: Scalars['String'];
};

export enum MessageOrderable {
  Text = 'text'
}

export type UserRef = {
  id?: Maybe<Scalars['ID']>;
  nickname?: Maybe<Scalars['String']>;
  initiatedConversations?: Maybe<Array<ConversationRef>>;
  receivedConversations?: Maybe<Array<ConversationRef>>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<User>;
  queryUser?: Maybe<Array<Maybe<User>>>;
  aggregateUser?: Maybe<UserAggregateResult>;
  getConversation?: Maybe<Conversation>;
  queryConversation?: Maybe<Array<Maybe<Conversation>>>;
  aggregateConversation?: Maybe<ConversationAggregateResult>;
  getMessage?: Maybe<Message>;
  queryMessage?: Maybe<Array<Maybe<Message>>>;
  aggregateMessage?: Maybe<MessageAggregateResult>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryQueryUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateUserArgs = {
  filter?: Maybe<UserFilter>;
};


export type QueryGetConversationArgs = {
  id: Scalars['ID'];
};


export type QueryQueryConversationArgs = {
  filter?: Maybe<ConversationFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateConversationArgs = {
  filter?: Maybe<ConversationFilter>;
};


export type QueryGetMessageArgs = {
  id: Scalars['ID'];
};


export type QueryQueryMessageArgs = {
  filter?: Maybe<MessageFilter>;
  order?: Maybe<MessageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateMessageArgs = {
  filter?: Maybe<MessageFilter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  getConversation?: Maybe<Conversation>;
  queryConversation?: Maybe<Array<Maybe<Conversation>>>;
  aggregateConversation?: Maybe<ConversationAggregateResult>;
};


export type SubscriptionGetConversationArgs = {
  id: Scalars['ID'];
};


export type SubscriptionQueryConversationArgs = {
  filter?: Maybe<ConversationFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type SubscriptionAggregateConversationArgs = {
  filter?: Maybe<ConversationFilter>;
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

export enum UserHasFilter {
  Nickname = 'nickname',
  InitiatedConversations = 'initiatedConversations',
  ReceivedConversations = 'receivedConversations'
}

export type AddUserInput = {
  nickname: Scalars['String'];
  initiatedConversations: Array<ConversationRef>;
  receivedConversations: Array<ConversationRef>;
};

export enum DgraphIndex {
  Int = 'int',
  Int64 = 'int64',
  Float = 'float',
  Bool = 'bool',
  Hash = 'hash',
  Exact = 'exact',
  Term = 'term',
  Fulltext = 'fulltext',
  Trigram = 'trigram',
  Regexp = 'regexp',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Geo = 'geo'
}

export type Point = {
  __typename?: 'Point';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type GenerateQueryParams = {
  get?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  aggregate?: Maybe<Scalars['Boolean']>;
};

export type Int64Filter = {
  eq?: Maybe<Scalars['Int64']>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  between?: Maybe<Int64Range>;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DeleteMessagePayload = {
  __typename?: 'DeleteMessagePayload';
  message?: Maybe<Array<Maybe<Message>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteMessagePayloadMessageArgs = {
  filter?: Maybe<MessageFilter>;
  order?: Maybe<MessageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ConversationRef = {
  id?: Maybe<Scalars['ID']>;
  messages?: Maybe<Array<MessageRef>>;
  initiator?: Maybe<UserRef>;
  recipient?: Maybe<UserRef>;
};

export type UpdateConversationInput = {
  filter: ConversationFilter;
  set?: Maybe<ConversationPatch>;
  remove?: Maybe<ConversationPatch>;
};

export type CustomHttp = {
  url: Scalars['String'];
  method: HttpMethod;
  body?: Maybe<Scalars['String']>;
  graphql?: Maybe<Scalars['String']>;
  mode?: Maybe<Mode>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
};

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type ConversationAggregateResult = {
  __typename?: 'ConversationAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type IntersectsFilter = {
  polygon?: Maybe<PolygonRef>;
  multiPolygon?: Maybe<MultiPolygonRef>;
};

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<IntRange>;
};

export type StringExactFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  between?: Maybe<StringRange>;
};

export type FloatRange = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE'
}

export type UserFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  nickname?: Maybe<StringHashFilter>;
  has?: Maybe<UserHasFilter>;
  and?: Maybe<Array<Maybe<UserFilter>>>;
  or?: Maybe<Array<Maybe<UserFilter>>>;
  not?: Maybe<UserFilter>;
};

export type UserOrder = {
  asc?: Maybe<UserOrderable>;
  desc?: Maybe<UserOrderable>;
  then?: Maybe<UserOrder>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type MessageAggregateResult = {
  __typename?: 'MessageAggregateResult';
  count?: Maybe<Scalars['Int']>;
  textMin?: Maybe<Scalars['String']>;
  textMax?: Maybe<Scalars['String']>;
};

export type UpdateConversationPayload = {
  __typename?: 'UpdateConversationPayload';
  conversation?: Maybe<Array<Maybe<Conversation>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateConversationPayloadConversationArgs = {
  filter?: Maybe<ConversationFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateMessagePayload = {
  __typename?: 'UpdateMessagePayload';
  message?: Maybe<Array<Maybe<Message>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateMessagePayloadMessageArgs = {
  filter?: Maybe<MessageFilter>;
  order?: Maybe<MessageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<AddUserPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  addConversation?: Maybe<AddConversationPayload>;
  updateConversation?: Maybe<UpdateConversationPayload>;
  deleteConversation?: Maybe<DeleteConversationPayload>;
  addMessage?: Maybe<AddMessagePayload>;
  updateMessage?: Maybe<UpdateMessagePayload>;
  deleteMessage?: Maybe<DeleteMessagePayload>;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type MutationAddConversationArgs = {
  input: Array<AddConversationInput>;
};


export type MutationUpdateConversationArgs = {
  input: UpdateConversationInput;
};


export type MutationDeleteConversationArgs = {
  filter: ConversationFilter;
};


export type MutationAddMessageArgs = {
  input: Array<AddMessageInput>;
};


export type MutationUpdateMessageArgs = {
  input: UpdateMessageInput;
};


export type MutationDeleteMessageArgs = {
  filter: MessageFilter;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export enum ConversationHasFilter {
  Messages = 'messages',
  Initiator = 'initiator',
  Recipient = 'recipient'
}

export type UpdateMessageInput = {
  filter: MessageFilter;
  set?: Maybe<MessagePatch>;
  remove?: Maybe<MessagePatch>;
};

export type UserPatch = {
  nickname?: Maybe<Scalars['String']>;
  initiatedConversations?: Maybe<Array<ConversationRef>>;
  receivedConversations?: Maybe<Array<ConversationRef>>;
};

export type MessageRef = {
  id?: Maybe<Scalars['ID']>;
  conversation?: Maybe<ConversationRef>;
  sender?: Maybe<UserRef>;
  text?: Maybe<Scalars['String']>;
};


export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type DateTimeFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateTimeRange>;
};

export type MessagePatch = {
  conversation?: Maybe<ConversationRef>;
  sender?: Maybe<UserRef>;
  text?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  conversation: Conversation;
  sender: User;
  text: Scalars['String'];
};


export type MessageConversationArgs = {
  filter?: Maybe<ConversationFilter>;
};


export type MessageSenderArgs = {
  filter?: Maybe<UserFilter>;
};

export type ConversationPatch = {
  messages?: Maybe<Array<MessageRef>>;
  initiator?: Maybe<UserRef>;
  recipient?: Maybe<UserRef>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DateTimeRange = {
  min: Scalars['DateTime'];
  max: Scalars['DateTime'];
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PolygonGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
};

export type StringRange = {
  min: Scalars['String'];
  max: Scalars['String'];
};

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type UserIdentificationFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'nickname'>
);

export type ConversationParticipantsFragment = (
  { __typename?: 'Conversation' }
  & Pick<Conversation, 'id'>
  & { initiator: (
    { __typename?: 'User' }
    & UserIdentificationFragment
  ), recipient: (
    { __typename?: 'User' }
    & UserIdentificationFragment
  ) }
);

export type SendMessageFragment = (
  { __typename?: 'Message' }
  & Pick<Message, 'text'>
  & { sender: (
    { __typename?: 'User' }
    & UserIdentificationFragment
  ) }
);

export type ConversationMessagesFragment = (
  { __typename?: 'Conversation' }
  & { messages: Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'id'>
    & SendMessageFragment
  )> }
);

export type SendNewMessageMutationVariables = Exact<{
  message: AddMessageInput;
}>;


export type SendNewMessageMutation = (
  { __typename?: 'Mutation' }
  & { addMessage?: Maybe<(
    { __typename?: 'AddMessagePayload' }
    & Pick<AddMessagePayload, 'numUids'>
    & { message?: Maybe<Array<Maybe<(
      { __typename?: 'Message' }
      & Pick<Message, 'id' | 'text'>
      & { sender: (
        { __typename?: 'User' }
        & UserIdentificationFragment
      ) }
    )>>> }
  )> }
);

export type GetConversationMessagesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetConversationMessagesQuery = (
  { __typename?: 'Query' }
  & { getConversation?: Maybe<(
    { __typename?: 'Conversation' }
    & Pick<Conversation, 'id'>
    & ConversationMessagesFragment
  )> }
);

export type GetExistingConversationsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetExistingConversationsQuery = (
  { __typename?: 'Query' }
  & { getUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { initiatedConversations: Array<(
      { __typename?: 'Conversation' }
      & ConversationParticipantsFragment
    )>, receivedConversations: Array<(
      { __typename?: 'Conversation' }
      & ConversationParticipantsFragment
    )> }
  )> }
);

export type RequestNewConversationMutationVariables = Exact<{
  initiator: UserRef;
  recipient: UserRef;
}>;


export type RequestNewConversationMutation = (
  { __typename?: 'Mutation' }
  & { addConversation?: Maybe<(
    { __typename?: 'AddConversationPayload' }
    & Pick<AddConversationPayload, 'numUids'>
    & { conversation?: Maybe<Array<Maybe<(
      { __typename?: 'Conversation' }
      & Pick<Conversation, 'id'>
      & ConversationParticipantsFragment
    )>>> }
  )> }
);

export type AddUserMutationVariables = Exact<{
  nickname: Scalars['String'];
}>;


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser?: Maybe<(
    { __typename?: 'AddUserPayload' }
    & Pick<AddUserPayload, 'numUids'>
    & { user?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & UserIdentificationFragment
    )>>> }
  )> }
);

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser?: Maybe<(
    { __typename?: 'DeleteUserPayload' }
    & Pick<DeleteUserPayload, 'numUids'>
    & { user?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & UserIdentificationFragment
    )>>> }
  )> }
);

export const UserIdentificationFragmentDoc = gql`
    fragment UserIdentification on User {
  id
  nickname
}
    `;
export const ConversationParticipantsFragmentDoc = gql`
    fragment ConversationParticipants on Conversation {
  id
  initiator {
    ...UserIdentification
  }
  recipient {
    ...UserIdentification
  }
}
    ${UserIdentificationFragmentDoc}`;
export const SendMessageFragmentDoc = gql`
    fragment SendMessage on Message {
  sender {
    ...UserIdentification
  }
  text
}
    ${UserIdentificationFragmentDoc}`;
export const ConversationMessagesFragmentDoc = gql`
    fragment ConversationMessages on Conversation {
  messages {
    id
    ...SendMessage
  }
}
    ${SendMessageFragmentDoc}`;
export const SendNewMessageDocument = gql`
    mutation SendNewMessage($message: AddMessageInput!) {
  addMessage(input: [$message]) {
    numUids
    message {
      id
      sender {
        ...UserIdentification
      }
      text
    }
  }
}
    ${UserIdentificationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SendNewMessageGQL extends Apollo.Mutation<SendNewMessageMutation, SendNewMessageMutationVariables> {
    document = SendNewMessageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetConversationMessagesDocument = gql`
    query GetConversationMessages($id: ID!) {
  getConversation(id: $id) {
    id
    ...ConversationMessages
  }
}
    ${ConversationMessagesFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetConversationMessagesGQL extends Apollo.Query<GetConversationMessagesQuery, GetConversationMessagesQueryVariables> {
    document = GetConversationMessagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetExistingConversationsDocument = gql`
    query GetExistingConversations($id: ID!) {
  getUser(id: $id) {
    id
    initiatedConversations(filter: {and: [{has: initiator}, {has: recipient}]}) {
      ...ConversationParticipants
    }
    receivedConversations(filter: {and: [{has: initiator}, {has: recipient}]}) {
      ...ConversationParticipants
    }
  }
}
    ${ConversationParticipantsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetExistingConversationsGQL extends Apollo.Query<GetExistingConversationsQuery, GetExistingConversationsQueryVariables> {
    document = GetExistingConversationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RequestNewConversationDocument = gql`
    mutation RequestNewConversation($initiator: UserRef!, $recipient: UserRef!) {
  addConversation(
    input: [{initiator: $initiator, recipient: $recipient, messages: []}]
  ) {
    conversation {
      id
      ...ConversationParticipants
    }
    numUids
  }
}
    ${ConversationParticipantsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RequestNewConversationGQL extends Apollo.Mutation<RequestNewConversationMutation, RequestNewConversationMutationVariables> {
    document = RequestNewConversationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddUserDocument = gql`
    mutation AddUser($nickname: String!) {
  addUser(
    input: [{nickname: $nickname, initiatedConversations: [], receivedConversations: []}]
  ) {
    user {
      ...UserIdentification
    }
    numUids
  }
}
    ${UserIdentificationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddUserGQL extends Apollo.Mutation<AddUserMutation, AddUserMutationVariables> {
    document = AddUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: ID!) {
  deleteUser(filter: {id: [$id]}) {
    user {
      ...UserIdentification
    }
    numUids
  }
}
    ${UserIdentificationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteUserGQL extends Apollo.Mutation<DeleteUserMutation, DeleteUserMutationVariables> {
    document = DeleteUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }