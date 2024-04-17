'use client';

import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import styles from './forms.module.scss';

import { useForm, SubmitHandler, Form } from 'react-hook-form';
import ExpenseFormInterface from '@/interfaces/ExpenseFormInterface';
import DefaultFormInput from './inputs/default-input';
import { ExpenseType } from '@/common/enums/expense-type.enums';
import DividerForm from './divider-form';
import CurrencyInput from './inputs/currency-input';
import { CurrencySymbol } from '@/common/enums/currencies-symbol.enums';
import DateInput from './inputs/date-input';
import BooleanInput from './inputs/boolean-input';
import Badge from './labels/badge';
import MerchantInterface from '@/interfaces/MerchantInterface';

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ExpenseFormInterface>();

  const [merchants, setMerchants] = useState([]);

  const [mappedMerchants, setMappedMerchants] = useState<MerchantInterface[]>(
    []
  );

  const [clients, setClients] = useState([]);

  const [projects, setProjects] = useState([]);

  const [users, setUsers] = useState([]);

  const [value, setValue] = useState<(typeof users)[0] | undefined>(users[0]);

  const [currency, setCurrency] = useState<{ id: string; value: string }[]>(
    () => {
      return Object.entries(CurrencySymbol).map(([id, value]) => ({
        id,
        value,
      }));
    }
  );

  const [expenseType, setExpenseType] = useState<
    { id: string; value: string }[]
  >(() => {
    return Object.entries(ExpenseType).map(([id, value]) => ({ id, value }));
  });

  //merchants
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/merchants`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setMappedMerchants(
          data.map((merchant: MerchantInterface) => {
            return {
              name: merchant.name,
              id: merchant.vat,
              merchantType: merchant.merchantType,
            };
          })
        );

        setMerchants(
          data.map(
            (merchant: { name: string; vat: number; merchantType: string }) => {
              return {
                value: merchant.name,
                id: merchant.vat,
                merchantType: merchant.merchantType,
              };
            }
          )
        );
      })
      .catch((error) => {
        console.error('Error fetching:', error);
      });
  }, []);

  //clients
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/clients`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setClients(
          data.map((client: { name: string; vat: number }) => {
            return {
              value: client.name,
              id: client.vat,
            };
          })
        );
      })
      .catch((error) => {
        console.error('Error fetching:', error);
      });
  }, []);

  //users
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(
          data.map((user: { name: string; userID: number }) => {
            return {
              value: user.name,
              id: user.userID,
            };
          })
        );
      })
      .catch((error) => {
        console.error('Error fetching:', error);
      });
  }, []);

  //console.log(errors);
  //console.log(watch());

  const submitForm: SubmitHandler<ExpenseFormInterface> = (
    data: ExpenseFormInterface
  ) => {
    console.log('JSON: ', data);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/expenses`, {
      method: 'POST',
      body: JSON.stringify({
        user: {
          userID: 199999,
        },
        description: data.description,
        amount: data.amount,
        merchant: data.merchant,
        client: data.client,
        expenseType: data.expense_type,
        executedAt: data.executedAt,
        lunch: data.lunch,
        attachments: false,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Despesa criada com sucesso!');
        } else {
          console.error('An error occurred while submitting the form');
        }
      })
      .catch((error) => {
        console.error('An error occurred while submitting the form', error);
      });
  };

  const selectedClient = watch('client');

  const selectedExpenseType = watch('expense_type');

  const selectedMerchant = watch('merchant');

  const selectedMerchantCategory = mappedMerchants.find(
    (merchant) => merchant.vat === parseInt(watch('merchant'))
  )?.merchantType;

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      id='default-modal'
      className='fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0'
    >
      <div className='relative max-h-full w-full max-w-2xl p-4'>
        <div className='relative rounded-xl bg-white shadow-2xl'>
          <div className='flex items-center justify-between rounded-t border-b p-4 md:p-5'>
            <h3 className='text-2xl font-light text-forms-title'>
              NOVA <span className='font-extrabold'>DESPESA</span>
            </h3>
            <button
              type='button'
              className='ms-auto inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900'
              data-modal-hide='default-modal'
            >
              <X />
              <span className='sr-only'>Close modal</span>
            </button>
          </div>

          <div className='space-y-4 p-4 md:p-5'>
            <CurrencyInput
              label='VALOR'
              size='large'
              options={currency}
              register={register('amount', { required: true })}
            />

            <DateInput
              label='DATA'
              size='large'
              register={register('executedAt', { required: true })}
            />

            <DefaultFormInput
              label='TIPO'
              size='medium'
              options={expenseType}
              register={register('expense_type')}
            />

            {selectedExpenseType !== '' ? (
              <>
                <DividerForm label='REFEIÇÃO' />

                <BooleanInput
                  label='ALMOÇO'
                  size='medium'
                  register={register('lunch')}
                />
              </>
            ) : null}

            <DefaultFormInput
              label='FORNECEDOR'
              size='medium'
              options={merchants}
              register={register('merchant', { required: true })}
            />

            {selectedMerchant !== '' ? (
              <Badge label={selectedMerchantCategory} />
            ) : null}

            <div className={styles.line}>
              <div className={`${styles.label} ${styles.label__small}`}>
                <label>DESCRIÇÃO</label>
              </div>
              <div className={styles.input_field}>
                <textarea
                  {...register('description', { required: true })}
                  rows={4}
                  className={`${styles.field} ${styles.field__textarea}`}
                  placeholder='Insira a descrição...'
                ></textarea>
              </div>
            </div>

            <DividerForm label='OPÇÕES' />

            <DefaultFormInput
              label='CLIENTE'
              size='small'
              options={clients}
              register={register('client')}
              //onSelectionChange={handleClientSelected}
            />

            {selectedClient !== 'default' ? (
              <DefaultFormInput
                label='PROJETO'
                size='small'
                options={projects}
                register={register('project')}
              />
            ) : null}
          </div>

          <div className='flex items-center rounded-b border-t border-gray-200 p-4 md:p-5'>
            <button
              data-modal-hide='default-modal'
              type='submit'
              className={`${styles.button}  ${styles.button__submit}`}
            >
              ENVIAR
            </button>
            <button
              data-modal-hide='default-modal'
              type='button'
              className={`${styles.button} ${styles.button__save}
              `}
            >
              GUARDAR
            </button>
            <button
              data-modal-hide='default-modal'
              type='button'
              className={`${styles.button} ${styles.button__cancel}`}
            >
              CANCELAR
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
