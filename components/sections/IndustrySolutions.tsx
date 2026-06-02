const WA_LINK = "https://wa.me/5218123554766";

const cards = [
  {
    title: 'Tequila y Bebidas',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8pWRa0dK1oYCv7JjWoQie9bwbc7LNS4OchwGTZJY8TKZthFbAhLfhn9YQMG-06dvZBXMmzO9h0eOQeX_SuwJB4c7uACXsq084n6F9ZYruKwZE9MTohfeKzln_G1v1XRu98WM5f4gOzikujPeBl5iAaQ7qoLbxNXYEaW7kr9y_NEj3bQ6GEfmB_2UPntrxvv4fepxmkrvEgMjn5eLdCzUfl0SqkfmcnMphywZdhVx7wZ1FQRnFvwtuAN9V7RTrgdhrNic3VHheejQ',
    alt: 'Tequila y Bebidas',
  },
  {
    title: 'Alimentos y Confitería',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4upI4m3WrfrqzHCdKVfd7AyVJ4qbAFBDJ858WJtgqJKL-xtAAJZXOKKv3WoGtNyLZ4ys444vgmoxyZsZ8u8SCxW2v0zs7w81UD78_Jf_8GjsiFHX0qcjItchDm1wVYutP8Ex7mbR2P6X-3YLcatN9l7fFYel8tK2fH0iSY_KI8MXIW7M-pfrdYIOIaNSZVLrNCFHwG-muEVEXOqfapxF3JrYw7OBmmHgE698EK5RauLScKN3cf8qnmLmFjJ3CRpeTt1BmBaG4tE',
    alt: 'Alimentos y Confitería',
  },
  {
    title: 'Ambiental Privado',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrUSw4ZwCimx4mZGuV2mzmUgNq-YCGVVX3VKK8fOJSm6B2fxyVny1F6KrKS0BXh8RMptKijPTARrYtgXKYodClMM9aO-eaFLjbWd3ILXyHK_edgd70p45zTPslFvUGoI2B6brwlVug8m9AteS-npx7O_eq2Cb02w7AsrNGnGw7b882oxMHOPSsQJx7-_1D1vpqnWjEUUu9qFxU6yd3Zft3GGL5dOnN7t8iq3LYhe89CyYSod8h-NlKpDeIQOOUUq0piJjDlYsO7oE',
    alt: 'Ambiental Privado',
  },
  {
    title: 'Farma I+D',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE50Bp-f363O_KRYiMA9Bvp7AcE4MBBbSLWBR_U1VDBFcJSp7KjuKt8VEk09ha_CsRnOIBAlAsfgeV147jUG3v7z0LUyWoSfQww2XWthQDRGO7ruIhsWSqGBNHj7gezBQGnoskGu0hXnokovmZTs7u7fhPNo7Ou0qkzC5cTqmQ8MCekVJzdDFmtb2uSSuH8lwyT6CLmnOkm_aWL6_f-O1bDsrlCuheYmaQWMYYoMxLPbUzXx7QWMOUdBK_nbEqRPDXga7NbS3qD0I',
    alt: 'Farma I+D',
  },
]

export default function IndustrySolutions() {
  return (
    <section className="bg-light-grey py-24 px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-headline text-headline-md text-primary-blue mb-12 text-center">
          Soluciones para laboratorios privados e industriales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-lg overflow-hidden border border-white hover:border-light-blue hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary-blue/20 group-hover:bg-primary-blue/0 transition-colors" />
              </div>
              <div className="p-6">
                <h4 className="font-label-md text-label-md text-primary-blue uppercase mb-4">
                  {card.title}
                </h4>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-technical-blue font-label-sm text-label-sm uppercase flex items-center justify-between group-hover:text-light-blue transition-colors"
                >
                  Saber más
                  <span className="material-symbols-outlined">chevron_right</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
