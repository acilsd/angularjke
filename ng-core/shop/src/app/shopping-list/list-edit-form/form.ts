import { FormBuilder } from '@angular/forms';

export const createAddForm = (provider: FormBuilder) => {
  const form = provider.group({
    name: null,
    amount: null
  });

  return form;
};
