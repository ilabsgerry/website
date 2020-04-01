import { Model, Table, Column, Scopes } from 'sequelize-typescript'

@Table({
  modelName: 'companyBenefit',
  tableName: 'company_benefits'
})
@Scopes({
  active: { where: { deletedAt: null } }
})
export class CompanyBenefit extends Model<CompanyBenefit> {
  @Column
  name: string

  @Column
  slug: string

  @Column
  deletedAt: Date
}