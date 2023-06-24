import type { Stores } from '@/domain';

export type SerializedStores<TStores extends Stores> = {
  [key in keyof TStores]: {
    class: string;
    data: string;
  };
};

export type DeserializedStores<
  TStores extends Stores,
  TSerializedStores extends SerializedStores<Stores>,
> = {
  [key in keyof TSerializedStores]: InstanceType<TStores[TSerializedStores[key]['class']]>;
};
