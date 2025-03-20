import {HomePage} from '@/components/HomePage'
import {studioUrl} from '@/sanity/lib/api'
import {sanityFetch} from '@/sanity/lib/live'
import {homePageQuery} from '@/sanity/lib/queries'
import Link from 'next/link'
import Image from "next/image";
import { ArrowRight, Leaf, Home, Waves, Shield, Phone } from 'lucide-react';


export default async function IndexRoute() {
  const {data} = await sanityFetch({query: homePageQuery})

  if (!data) {
   
     
      
     
        return (
          <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/60" />
              <div className="container relative z-10 mx-auto px-4 text-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                  Le Chemin du Vivant
                </h1>
                <p className="text-xl md:text-2xl max-w-[700px] mx-auto mb-8">
                  Harmonisez votre espace de vie avec la géobiologie
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button  className="bg-primary hover:bg-primary/90">
                    <Link href="/services">
                      Découvrir nos services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </button>
                  <button  className="bg-background/20 text-white border-white hover:bg-background/30">
                    <Link href="/contact">
                      Prendre rendez-vous <Phone className="ml-2 h-4 w-4" />
                    </Link>
                  </button>
                </div>
              </div>
            </section>
      
            {/* Introduction Section */}
            <section className="py-12 md:py-24 bg-background">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                      Joëlle Villegas, Géobiologue Certifiée
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Bienvenue sur le site de Joëlle Villegas, géobiologue certifiée par Bioterres. Je vous propose mon expertise pour harmoniser votre espace de vie et améliorer votre bien-être grâce à la géobiologie.
                    </p>
                    <p className="text-lg text-muted-foreground mb-6">
                      La géobiologie étudie l'influence de l'environnement sur le vivant, en prenant en compte les énergies telluriques et cosmiques qui nous entourent.
                    </p>
                    <button>
                      <Link href="/about">
                        En savoir plus sur la géobiologie <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </button>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image 
                      src="/placeholder.svg?height=800&width=600" 
                      alt="Joëlle Villegas, Géobiologue"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
      
            {/* Services Overview */}
            <section className="py-12 md:py-24 bg-muted/50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-center">
                  Mes Services
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Harmonisation de l'habitat</h3>
                    <p className="text-muted-foreground mb-4">
                      Analyse et traitement des déséquilibres énergétiques dans votre maison ou lieu de travail.
                    </p>
                    <Link href="/services#habitat" className="text-primary font-medium inline-flex items-center">
                      En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Waves className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Détection des pollutions</h3>
                    <p className="text-muted-foreground mb-4">
                      Identification des sources de pollution électromagnétique, tellurique et autres perturbations.
                    </p>
                    <Link href="/services#pollution" className="text-primary font-medium inline-flex items-center">
                      En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Nettoyage énergétique</h3>
                    <p className="text-muted-foreground mb-4">
                      Nettoyage aurique des entités et des mémoires pour rétablir l'équilibre énergétique.
                    </p>
                    <Link href="/services#nettoyage" className="text-primary font-medium inline-flex items-center">
                      En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <button>
                    <Link href="/services">
                      Voir tous les services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </button>
                </div>
              </div>
            </section>
      
            {/* Testimonial Section */}
            <section className="py-12 md:py-24 bg-background">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-center">
                  Ce que disent mes clients
                </h2>
                <div className="max-w-3xl mx-auto bg-muted/30 p-8 rounded-lg border border-border">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 relative w-16 h-16 rounded-full overflow-hidden">
                      <Image 
                        src="/placeholder.svg?height=200&width=200" 
                        alt="Portrait de client"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Marie Dupont</h3>
                      <p className="text-muted-foreground">Propriétaire à Lyon</p>
                    </div>
                  </div>
                  <blockquote className="text-lg italic">
                    "Grâce à l'intervention de Joëlle, notre maison est devenue un véritable havre de paix. Les problèmes de sommeil ont disparu et l'ambiance générale s'est considérablement améliorée. Je recommande vivement ses services à tous ceux qui souhaitent harmoniser leur lieu de vie."
                  </blockquote>
                </div>
              </div>
            </section>
      
            {/* CTA Section */}
            <section className="py-12 md:py-24 bg-primary text-primary-foreground">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                  Prêt à harmoniser votre espace de vie ?
                </h2>
                <p className="text-xl max-w-[700px] mx-auto mb-8">
                  Contactez-moi dès aujourd'hui pour discuter de vos besoins et prendre rendez-vous pour une consultation.
                </p>
                <button>
                  <Link href="/contact">
                    Prendre contact <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </button>
              </div>
            </section>
          </div>
     
    )
  }

  return <HomePage data={data} />
}
