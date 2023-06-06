import { FlashSaleItems } from "@/components/flash-sale-items";
import { MainNav } from "@/components/main-nav";
import { ProductCategories } from "@/components/product-categories";
import { Search } from "@/components/search";
import { UserNav } from "@/components/user-nav";

export default function Home() {
  return (
    <>
      <div className="p-3 bg-white flex justify-between border-b-[1px] border-gray-100">
        <div className="flex justify-center items-center space-x-4">
          <h1 className="text-lg font-bold">🛍️ E-Commerce</h1>
          <MainNav />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
      <div className="px-20 py-10 space-y-8">
        <ProductCategories />
        <FlashSaleItems />
      </div>
    </>
  );
}
