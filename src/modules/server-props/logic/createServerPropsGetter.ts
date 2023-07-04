import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  PreviewData,
} from 'next/types';
import type { ParsedUrlQuery } from 'querystring';

import type { ProvidedOptions, Stores } from '@/domain';
import { type ObjectWithStringKeys, createStores } from '@/utils';
import { createSerializedStoresGetter } from '@/modules/serialization';
import { createResultWithInjectionGetter } from '@/modules/injection';

import type { CreateStoredServerPropsGetter, StoredServerPropsGetterCallback } from '../domain';

const createStoredServerPropsGetter: CreateStoredServerPropsGetter = <TStores extends Stores>(
  stores: TStores,
  options: ProvidedOptions,
) => {
  const getSerializedStores = createSerializedStoresGetter(options.serialization.serialize);
  const getResultWithInjection = createResultWithInjectionGetter(options.injection.key);

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
