import { tineAction } from 'tinejs';
import { Prisma } from '@prisma/client/scripts/default-index.js';

export default Prisma.defineExtension((client) => {
  return client.$extends({
    model: {
      $allModels: {
        findUnique<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findUnique'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'findUnique'>>(
            () => client[ctx.name].findUnique(x),
            { action: `prisma.${ctx.name}.findUnique` },
          )(x, actionCtx);
        },
        findUniqueOrThrow<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findUniqueOrThrow'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<any, Prisma.Result<T, A, 'findUniqueOrThrow'>>(
            () => client[ctx.name].findUniqueOrThrow(x),
            { action: `prisma.${ctx.name}.findUniqueOrThrow` },
          )(x, actionCtx);
        },
        findFirst<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findFirst'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'findFirst'>>(
            () => client[ctx.name].findFirst(x),
            { action: `prisma.${ctx.name}.findFirst` },
          )(x, actionCtx);
        },
        findFirstOrThrow<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findFirstOrThrow'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'findFirstOrThrow'>>(
            () => client[ctx.name].findFirstOrThrow(x),
            { action: `prisma.${ctx.name}.findFirstOrThrow` },
          )(x, actionCtx);
        },
        findMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'findMany'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'findMany'>>(
            () => client[ctx.name].findMany(x),
            { action: `prisma.${ctx.name}.findMany` },
          )(x, actionCtx);
        },
        aggregate<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'aggregate'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'aggregate'>>(
            () => client[ctx.name].aggregate(x),
            { action: `prisma.${ctx.name}.aggregate` },
          )(x, actionCtx);
        },
        groupBy<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'groupBy'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'groupBy'>>(
            () => client[ctx.name].groupBy(x),
            { action: `prisma.${ctx.name}.groupBy` },
          )(x, actionCtx);
        },
        count<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'count'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'count'>>(
            () => client[ctx.name].count(x),
            { action: `prisma.${ctx.name}.count` },
          )(x, actionCtx);
        },
        create<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'create'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'create'>>(
            () => client[ctx.name].create(x),
            { action: `prisma.${ctx.name}.create` },
          )(x, actionCtx);
        },
        createMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'createMany'>>,
          actionCtx: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'createMany'>>(
            () => client[ctx.name].createMany(x),
            { action: `prisma.${ctx.name}.createMany` },
          )(x, actionCtx);
        },
        delete<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'delete'>>,
          actionCtx: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'delete'>>(
            () => client[ctx.name].delete(x),
            { action: `prisma.${ctx.name}.delete` },
          )(x, actionCtx);
        },
        update<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'update'>>,
          actionCtx: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'update'>>(
            () => client[ctx.name].update(x),
            { action: `prisma.${ctx.name}.update` },
          )(x, actionCtx);
        },
        deleteMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'deleteMany'>>,
          actionCtx: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'deleteMany'>>(
            () => client[ctx.name].deleteMany(x),
            { action: `prisma.${ctx.name}.deleteMany` },
          )(x, actionCtx);
        },
        updateMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'updateMany'>>,
          actionCtx: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'updateMany'>>(
            () => client[ctx.name].updateMany(x),
            { action: `prisma.${ctx.name}.updateMany` },
          )(x, actionCtx);
        },
        upsert<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'upsert'>>,
          actionCtx: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'upsert'>>(
            () => client[ctx.name].upsert(x),
            { action: `prisma.${ctx.name}.upsert` },
          )(x, actionCtx);
        },
      },
    },
  });
});
