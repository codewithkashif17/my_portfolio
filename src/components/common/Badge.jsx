
export default function Badge() {
  return (
    <div
              className="
                mt-12
                flex
                flex-col
                gap-5
                rounded-2xl
                border
                border-primary/15
                bg-primary/[0.03]
                p-6
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div>
                <p className="font-semibold text-on-surface">
                  Have an idea worth building?
                </p>
    
                <p className="mt-1 text-sm text-on-surface-variant">
                  Let's turn your requirements into a real software solution.
                </p>
              </div>
    
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-on-primary
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-primary/20
                "
              >
                Start a Conversation
              </a>
            </div>
  )
}
