import { TineCtx, tineAction } from 'tinejs';
import { Prisma } from '@prisma/client/scripts/default-index.js';

const getModelName = (str: string) =>
  str.charAt(0).toLowerCase() + str.slice(1);

export default (getClient?: (ctx: TineCtx) => any) => Prisma.defineExtension((client) => {
  return client.$extends({
    model: {
      $allModels: {
        findUnique<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findUnique'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'findUnique'> | null>(
            { type: `prisma.${getModelName(ctx.name!)}.findUnique`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].findUnique(p) : client[ctx.name!].findUnique(p),
          )(x, actionCtx);
        },
        findUniqueOrThrow<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findUniqueOrThrow'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<any, Prisma.Result<T, A, 'findUniqueOrThrow'>>(
            { type: `prisma.${getModelName(ctx.name!)}.findUniqueOrThrow`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].findUniqueOrThrow(p) : client[ctx.name!].findUniqueOrThrow(p),
          )(x, actionCtx);
        },
        findFirst<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findFirst'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'findFirst'> | null>(
            { type: `prisma.${getModelName(ctx.name!)}.findFirst`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].findFirst(p) : client[ctx.name!].findFirst(p)
          )(x, actionCtx);
        },
        findFirstOrThrow<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findFirstOrThrow'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'findFirstOrThrow'>>(
            { type: `prisma.${getModelName(ctx.name!)}.findFirstOrThrow`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].findFirstOrThrow(p) : client[ctx.name!].findFirstOrThrow(p),
          )(x, actionCtx);
        },
        findMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findMany'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'findMany'>>(
            { type: `prisma.${getModelName(ctx.name!)}.findMany`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].findMany(p) : client[ctx.name!].findMany(p),
          )(x, actionCtx);
        },
        aggregate<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'aggregate'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'aggregate'>>(
            { type: `prisma.${getModelName(ctx.name!)}.aggregate`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].aggregate(p) : client[ctx.name!].aggregate(p),

          )(x, actionCtx);
        },
        groupBy<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'groupBy'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'groupBy'>>(
            { type: `prisma.${getModelName(ctx.name!)}.groupBy`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].groupBy(p) : client[ctx.name!].groupBy(p),
          )(x, actionCtx);
        },
        count<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'count'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'count'>>(
            { type: `prisma.${getModelName(ctx.name!)}.count`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].count(p) : client[ctx.name!].count(p),
          )(x, actionCtx);
        },
        create<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'create'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'create'>>(
            { type: `prisma.${getModelName(ctx.name!)}.create`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].create(p) : client[ctx.name!].create(p),
          )(x, actionCtx);
        },
        createMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'createMany'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'createMany'>>(
            { type: `prisma.${getModelName(ctx.name!)}.createMany`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].createMany(p) : client[ctx.name!].createMany(p),
          )(x, actionCtx);
        },
        delete<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'delete'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'delete'>>(
            { type: `prisma.${getModelName(ctx.name!)}.delete`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].delete(p) : client[ctx.name!].delete(p),
          )(x, actionCtx);
        },
        update<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'update'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'update'>>(
            { type: `prisma.${getModelName(ctx.name!)}.update`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].update(p) : client[ctx.name!].update(p),
          )(x, actionCtx);
        },
        deleteMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'deleteMany'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'deleteMany'>>(
            { type: `prisma.${getModelName(ctx.name!)}.deleteMany`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].deleteMany(p) : client[ctx.name!].deleteMany(p),
          )(x, actionCtx);
        },
        updateMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'updateMany'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'updateMany'>>(
            { type: `prisma.${getModelName(ctx.name!)}.updateMany`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].updateMany(p) : client[ctx.name!].updateMany(p),
          )(x, actionCtx);
        },
        upsert<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'upsert'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'upsert'>>(
            { type: `prisma.${getModelName(ctx.name!)}.upsert`, parseResponse: true },
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name!].upsert(p) : client[ctx.name!].upsert(p),
          )(x, actionCtx);
        },
      },
    },
  });
});
