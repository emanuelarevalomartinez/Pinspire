
interface Props{
    children: React.ReactNode;
}

export function DashboardLayout({ children }: Props) {
    return (
      <div className="min-h-screen bg-neutral-50">
        {children}
      </div>
    )
  }