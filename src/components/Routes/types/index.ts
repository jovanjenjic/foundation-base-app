import { PropsWithChildren } from 'react';

export interface AuthGuardT extends PropsWithChildren {
  fallbackBehavior?: 'redirect' | 'ignore';
}
