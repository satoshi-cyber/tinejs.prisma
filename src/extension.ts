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
            (p) => client[ctx.name].findUnique(p),
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
            (p) => client[ctx.name].findUniqueOrThrow(p),
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
            (p) => client[ctx.name].findFirst(p),
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
            (p) => client[ctx.name].findFirstOrThrow(p),
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
            (p) => client[ctx.name].findMany(p),
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
            (p) => client[ctx.name].aggregate(p),
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
            (p) => client[ctx.name].groupBy(p),
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
            (p) => client[ctx.name].count(p),
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
            (p) => client[ctx.name].create(p),
            { action: `prisma.${ctx.name}.create` },
          )(x, actionCtx);
        },
        createMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'createMany'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'createMany'>>(
            (p) => client[ctx.name].createMany(p),
            { action: `prisma.${ctx.name}.createMany` },
          )(x, actionCtx);
        },
        delete<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'delete'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'delete'>>(
            (p) => client[ctx.name].delete(p),
            { action: `prisma.${ctx.name}.delete` },
          )(x, actionCtx);
        },
        update<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'update'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'update'>>(
            (p) => client[ctx.name].update(p),
            { action: `prisma.${ctx.name}.update` },
          )(x, actionCtx);
        },
        deleteMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'deleteMany'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'deleteMany'>>(
            (p) => client[ctx.name].deleteMany(p),
            { action: `prisma.${ctx.name}.deleteMany` },
          )(x, actionCtx);
        },
        updateMany<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'updateMany'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'updateMany'>>(
            (p) => client[ctx.name].updateMany(p),
            { action: `prisma.${ctx.name}.updateMany` },
          )(x, actionCtx);
        },
        upsert<T, A>(
          this: T,
          x: Prisma.Exact<A, Prisma.Args<T, 'upsert'>>,
          actionCtx?: { name: string },
        ) {
          const ctx = Prisma.getExtensionContext(this);

          return tineAction<unknown, Prisma.Result<T, A, 'upsert'>>(
            (p) => client[ctx.name].upsert(p),
            { action: `prisma.${ctx.name}.upsert` },
          )(x, actionCtx);
        },
      },
    },
  });
});
