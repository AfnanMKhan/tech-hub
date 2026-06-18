# CompareCart

A production-oriented e-commerce and product comparison starter inspired by Amazon-style marketplace shopping and 91mobiles-style electronics comparisons.

## Stack

- Next.js App Router, React, TypeScript
- Tailwind CSS with light/dark mode
- Next.js API routes for product, comparison, orders, coupons, alerts, recommendations, and auth registration
- Prisma schema for PostgreSQL
- Client cart state with local persistence, ready to replace with server cart sessions

## Main Pages

- `/` - home page with deals, recommendations, and trending comparisons
- `/products` - searchable product listing with sticky filters and sorting
- `/products/[slug]` - detail page with gallery, sellers, specs, pros/cons, reviews, and similar comparisons
- `/compare` - side-by-side comparison for up to four products with best-value scoring
- `/cart` - cart and checkout summary with coupon logic
- `/login` - email and Google OAuth-ready account screen
- `/dashboard` - profile, order tracking, wishlist, alerts, and recommendations
- `/admin` - admin analytics and catalog management surface

## API Endpoints

- `GET /api/products?q=&category=&brand=` - list/search/filter products
- `POST /api/products` - create product
- `GET /api/products/:id` - product detail
- `PATCH /api/products/:id` - update product
- `DELETE /api/products/:id` - delete product
- `GET /api/compare?ids=p1,p2,p3,p4` - comparison payload and best value id
- `GET /api/recommendations?category=Mobiles` - personalized recommendation feed placeholder
- `POST /api/orders` - create order
- `GET /api/orders` - current user order tracking placeholder
- `POST /api/alerts` - create price drop alert
- `POST /api/coupons` - validate coupon
- `POST /api/auth/register` - register user placeholder

## Local Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:3000`.

For a real database:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

## Architecture

The app is split into four layers:

1. **Experience layer:** App Router pages provide mobile-first shopping, detail, comparison, account, and admin workflows.
2. **Component layer:** Product cards, sticky header/search, filters, comparison table, cart provider, and product actions are reusable across pages.
3. **Domain layer:** Product, seller, review, cart, recommendation scoring, formatting, and search helpers live in `src/lib`.
4. **Data/API layer:** Next.js API routes currently use seeded data, while `prisma/schema.prisma` defines the production PostgreSQL model.

## Scaling Notes

- Move seeded data behind Prisma repositories and add Redis caching for product listing, autocomplete, and comparison payloads.
- Add OpenSearch/Meilisearch for typo-tolerant search, synonyms, and high-volume filters.
- Use a queue for price drop checks, affiliate feed imports, review verification, and order status webhooks.
- Protect admin routes with role-based middleware and audit logs.
- Store cart server-side for authenticated users and keep local cart as guest fallback.
- Serve images from a CDN, normalize seller offers, and index `categoryId`, `brandId`, `price`, `rating`, and `popularity`.
- Recommendations can evolve from the included scoring function to a hybrid model using user events, category affinity, seller performance, and price-drop sensitivity.
