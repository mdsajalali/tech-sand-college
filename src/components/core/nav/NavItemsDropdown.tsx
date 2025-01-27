import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function NavItemsDropdown({
  trigger,
  item,
}: {
  trigger: React.ReactNode;
  item: { title: string; submenu: { label: string; link: string }[] };
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="cursor-pointer focus-visible:outline-none"
      >
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        side="bottom"
        className="rounded bg-white p-4 shadow-md"
      >
        {item.submenu.length > 0 ? (
          <ul className="space-y-2">
            {item.submenu.map((subItem, idx) => (
              <li key={idx}>
                <Link
                  href={subItem.link}
                  className="block rounded border border-transparent p-2 text-sm font-medium uppercase transition hover:border-gray-300 hover:bg-primary hover:text-white"
                >
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <span className="block text-sm text-gray-500">
            No submenu available
          </span>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
