import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/', '/courses', '/course_preview(.*)', '/register', '/accueil', '/booking-car', '/accueil/paiement', '/accueil/paiementtcf', '/accueil/pricing', '/entreprise', '/tcfregister', '/api/googleSheets', '/api/googleSheets/upload', '/api/bookLesson', '/fichedeformationchancimi.pdf', '/REGLEMENT_RULES_CHANCIMI.pdf', '/offre-de-service.pdf', '/quizpermisa/quizchap2', '/permisa', '/permisb'])

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
