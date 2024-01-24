import AdminUsers from './adminUsers'

export const dynamic = 'force-dynamic'
export const revalidate = 0;
export const fetchCache = 'force-no-store'

const page = () => {
  return (
    <AdminUsers />
  )
}

export default page