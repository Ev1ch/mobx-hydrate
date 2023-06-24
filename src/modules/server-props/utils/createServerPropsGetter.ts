import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  PreviewData,
} from 'next/types';
import type { ParsedUrlQuery } from 'querystring';

import type { Stores } from '@/domain';
import { type ObjectWithStringKeys, createStores } from '@/utils';
import { getResultWithInjection } from '@/modules/injection/utils';
import { getSerializedStores } from '@/modules/serialization/utils';

import type { StoredServerPropsGetter, StoredServerPropsGetterCallback } from '../domain';

export type CreateStoredServerPropsGetter = <TStores extends Stores>(
  stores: TStores,
) => StoredServerPropsGetter<TStores>;

const createStoredServerPropsGetter: CreateStoredServerPropsGetter = <TStores extends Stores>(
  stores: TStores,
) => {
  const getServerSideProps =
    <
      Props extends ObjectWithStringKeys = ObjectWithStringKeys,
      Params extends ParsedUrlQuery = ParsedUrlQuery,
      Preview extends PreviewData = PreviewData,
    >(
      callback: StoredServerPropsGetterCallback<
        TStores,
        GetServerSideProps<Props, Params, Preview>
      >,
    ) =>
    async (context: GetServerSidePropsContext<Params, Preview>) => {
      const constructedStores = createStores(stores);
      const result = await callback(constructedStores)(context);
      return getResultWithInjection(result, getSerializedStores(constructedStores));
    };

  const getStaticProps =
    <
      Props extends ObjectWithStringKeys = ObjectWithStringKeys,
      Params extends ParsedUrlQuery = ParsedUrlQuery,
      Preview extends PreviewData = PreviewData,
    >(
      callback: StoredServerPropsGetterCallback<TStores, GetStaticProps<Props, Params, Preview>>,
    ) =>
    async (context: GetStaticPropsContext<Params, Preview>) => {
      const constructedStores = createStores(stores);
      const result = await callback(constructedStores)(context);
      return getResultWithInjection(result, getSerializedStores(constructedStores));
    };

  return {
    getServerSideProps,
    getStaticProps,
  };
};

export default createStoredServerPropsGetter;
