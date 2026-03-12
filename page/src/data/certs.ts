export interface Cert {
  name: string
  issuer: string
  status: 'earned' | 'scheduled'
  date?: string
}

export const certs: Cert[] = [
  { name: 'CCNAv7',                issuer: 'Cisco',     status: 'earned' },
  { name: 'Terraform Associate',   issuer: 'HashiCorp', status: 'scheduled' },
  { name: 'AWS DVA',               issuer: 'Amazon',    status: 'scheduled', date: 'Mar 2026' },
  { name: 'AWS SAA',               issuer: 'Amazon',    status: 'scheduled', date: 'Late 2026' },
  { name: 'CKA',                   issuer: 'CNCF',      status: 'scheduled', date: 'Late 2026' },
]
