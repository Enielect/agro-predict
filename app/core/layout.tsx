import BottomNav from "@/components/BottomNav";

export default function CoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <BottomNav />
    </div>
  );
}
