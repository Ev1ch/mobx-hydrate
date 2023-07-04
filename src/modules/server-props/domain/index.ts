import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  PreviewData,
} from 'next';
import type { ParsedUrlQuery } from 'querystring';

import type { Stores, ConstructedStores, ProvidedOptions } from '@/domain';
import type { FunctionWithAwaited, ObjectWithStringKeys } from '@/utils';

export type StoredServerPropsGetterCallback<
  TStores extends Stores,
  TServerPropsGetter extends ServerPropsGetter,
> = (stores: ConstructedStores<TStores>) => FunctionWithAwaited<TServerPropsGetter>;

export interface StoredServerPropsGetter<TStores extends Stores> {
  getServerSideProps: (
    callback: StoredServerPropsGetterCallback<TStores, GetServerSideProps>,
  ) => (context: GetServerSidePropsContext) => Promise<ServerPropsGetterResult>;
  getStaticProps: (
    callback: StoredServerPropsGetterCallback<TStores, GetStaticProps>,
  ) => (context: GetStaticPropsContext) => Promise<ServerPropsGetterResult>;
}

export type ServerPropsGetter<
  /**
   * `any` is used to prevent subtype errors
   * when passing generic arguments in `createServerPropsGetter`
   */
  Props extends ObjectWithStringKeys = any,
  Params extends ParsedUrlQuery = any,
  Preview extends PreviewData = any,
> = GetServerSideProps<Props, Params, Preview> | GetStaticProps<Props, Params, Preview>;

export type ServerPropsGetterResult<TProps extends ObjectWithStringKeys = ObjectWithStringKeys> =
  Awaited<ReturnType<ServerPropsGetter<TProps>>>;

export type CreateStoredServerPropsGetter = <TStores extends Stores>(
  stores: TStores,
  options: ProvidedOptions,
) => StoredServerPropsGetter<TStores>;
