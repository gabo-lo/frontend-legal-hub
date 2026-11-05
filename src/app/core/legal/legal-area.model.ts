export interface LegalArea {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly subtitle: string;
  readonly route: string;
  readonly featured?: boolean;
  readonly badge?: string;
}
