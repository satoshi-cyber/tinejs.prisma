## tinejs.payload

payload action

# example: 

/actions/prisma/index.ts

```typescript
import { PrismaClient } from '@prisma/client/edge';
import tineExtension from 'tinejs.prisma';

const prisma = new PrismaClient().$extends(tineExtension());

export default prisma;

```

usage:

```typescript
import prisma from '@/actions/prisma';

const listAllJobs = prisma.job.findMany({
  include: {
    company: true,
  },
});

export default listAllJobs;
```
