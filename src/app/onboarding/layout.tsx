import Image from 'next/image'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className="md:flex md:h-screen md:w-screen md:items-center md:justify-center ">
      <div className="h-screen w-screen absolute -z-10 blur-lg ">
        <Image
          src="/background_login.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <section
        className="grid grid-cols-1 h-screen w-screen gap-2 md:grid-cols-2 md:size-11/12 
                    md:max-w-6xl md:justify-items-center items-start md:items-center bg-base-100 "
      >
        {children}
        <div className="md:w-full md:h-full relative">
          <Image
            src="/login_right.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>
    </div>
  )
}
