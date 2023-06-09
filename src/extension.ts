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
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].findUnique(p) : client[ctx.name].findUnique(p),
            { action: `prisma.${getModelName(ctx.name)}.findUnique`, parseResponse: true },
          )(x, actionCtx);
        },
        findUniqueOrThrow<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findUniqueOrThrow'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<any, Prisma.Result<T, A, 'findUniqueOrThrow'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].findUniqueOrThrow(p) : client[ctx.name].findUniqueOrThrow(p),
            { action: `prisma.${getModelName(ctx.name)}.findUniqueOrThrow`, parseResponse: true },
          )(x, actionCtx);
        },
        findFirst<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findFirst'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'findFirst'> | null>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].findFirst(p) : client[ctx.name].findFirst(p),
            { action: `prisma.${getModelName(ctx.name)}.findFirst`, parseResponse: true },
          )(x, actionCtx);
        },
        findFirstOrThrow<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findFirstOrThrow'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'findFirstOrThrow'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].findFirstOrThrow(p) : client[ctx.name].findFirstOrThrow(p),
            { action: `prisma.${getModelName(ctx.name)}.findFirstOrThrow`, parseResponse: true },
          )(x, actionCtx);
        },
        findMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findMany'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'findMany'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].findMany(p) : client[ctx.name].findMany(p),
            { action: `prisma.${getModelName(ctx.name)}.findMany`, parseResponse: true },
          )(x, actionCtx);
        },
        aggregate<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'aggregate'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'aggregate'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].aggregate(p) : client[ctx.name].aggregate(p),
            { action: `prisma.${getModelName(ctx.name)}.aggregate`, parseResponse: true },
          )(x, actionCtx);
        },
        groupBy<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'groupBy'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'groupBy'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].groupBy(p) : client[ctx.name].groupBy(p),
            { action: `prisma.${getModelName(ctx.name)}.groupBy`, parseResponse: true },
          )(x, actionCtx);
        },
        count<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'count'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'count'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].count(p) : client[ctx.name].count(p),
            { action: `prisma.${getModelName(ctx.name)}.count`, parseResponse: true },
          )(x, actionCtx);
        },
        create<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'create'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'create'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].create(p) : client[ctx.name].create(p),
            { action: `prisma.${getModelName(ctx.name)}.create`, parseResponse: true },
          )(x, actionCtx);
        },
        createMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'createMany'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'createMany'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].createMany(p) : client[ctx.name].createMany(p),
            { action: `prisma.${getModelName(ctx.name)}.createMany`, parseResponse: true },
          )(x, actionCtx);
        },
        delete<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'delete'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'delete'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].delete(p) : client[ctx.name].delete(p),
            { action: `prisma.${getModelName(ctx.name)}.delete`, parseResponse: true },
          )(x, actionCtx);
        },
        update<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'update'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'update'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].update(p) : client[ctx.name].update(p),
            { action: `prisma.${getModelName(ctx.name)}.update`, parseResponse: true },
          )(x, actionCtx);
        },
        deleteMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'deleteMany'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'deleteMany'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].deleteMany(p) : client[ctx.name].deleteMany(p),
            { action: `prisma.${getModelName(ctx.name)}.deleteMany`, parseResponse: true },
          )(x, actionCtx);
        },
        updateMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'updateMany'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'updateMany'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].updateMany(p) : client[ctx.name].updateMany(p),
            { action: `prisma.${getModelName(ctx.name)}.updateMany`, parseResponse: true },
          )(x, actionCtx);
        },
        upsert<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'upsert'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'upsert'>>(
            (p, { ctx: tineCtx }) => getClient ? getClient(tineCtx)[ctx.name].upsert(p) : client[ctx.name].upsert(p),
            { action: `prisma.${getModelName(ctx.name)}.upsert`, parseResponse: true },
          )(x, actionCtx);
        },
      },
    },
  });
});
