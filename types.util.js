import zod from 'zod';

export const createTodoVal = zod.object({
  title: zod.string(),
  description:zod.string()
});

export const updateTodoVal = zod.object({
  id: zod.string()
});
