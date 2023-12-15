import Link from "next/link";
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-11/12 mx-auto mt-10">
        <ul className="gap-y-5 mr-5 divide-y divide-current">
            <li className="my-1">
                <Link href="/customer/myPage/">
                    <p>マイページトップ</p>
                </Link>
            </li>
            <li className="my-1">
                <Link href="/services">
                    <p>会員情報</p>
                </Link>
            </li>
            <li className="my-1">
                <Link href="/customer/myPage/deliveryDestination/">
                    <p>配送先情報</p>
                </Link>
            </li>
        </ul>
        <div className="">
            {children}
        </div>
    </div>
 
  )
}
