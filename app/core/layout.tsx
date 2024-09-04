import BottomNav from "@/components/BottomNav";

export default function CoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[100dvh]">
      <div className="overflow-scroll h-[calc(100dvh-69px)]">{children}</div>
      <BottomNav />
    </div>
  );
}
