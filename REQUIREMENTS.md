# Coffee Personality Quiz – Requirements

## Personality → Coffee Pairings

1. **Bold Adventurer** → Double Espresso
   - Tagline: "You live for intensity"
   - Image: `public/espresso.jpg`

2. **Cozy Classic** → Medium Roast Drip
   - Tagline: "Comfort in every cup"
   - Image: `public/drip-coffee.jpg`

3. **Health Nut** → Oat Milk Americano
   - Tagline: "Wellness in every sip"
   - Image: `public/americano.jpg`

4. **Artisan Snob** → Pour-Over, Single Origin
   - Tagline: "You know what you like"
   - Image: `public/pour-over.jpg`

## Result Display Style

**Show all percentages** – Display all four personality percentages with their corresponding coffee recommendations. Users can see their full breakdown (e.g., "You're 50% Bold Adventurer, 30% Cozy Classic, 20% Health Nut, 10% Artisan Snob").

## Visual Style

**Warm & Cozy with Fun Emoticons:**
- Base aesthetic: Style 4 (earth tones, soft gradients, Garamond font)
- Color palette: Warm browns (#d4a574, #8b6f47), cream backgrounds (#fff9f0, #f5e6d3)
- Font: Garamond size 11
- Add emoticons to answer options (from Style 1)
- Rounded corners (12-16px border radius)
- Soft shadows for depth

## Images & Icons

- **Images:** Yes – coffee photos for each result
- **Icons:** Yes – emoticons next to each answer option

## Quiz Questions

### Question 1: How do you spend your ideal weekend morning?
- 🏃 Early run, then a protein smoothie → Health Nut
- ☕ Slow start with a good book and coffee → Cozy Classic
- 🎨 Exploring a new café or farmers market → Artisan Snob
- ⚡ Jumping into a new project or hobby → Bold Adventurer

### Question 2: What's your approach to trying new foods?
- 🌶️ Always ordering the most adventurous thing on the menu → Bold Adventurer
- 🥗 Checking the ingredients and nutrition first → Health Nut
- 🍝 Sticking with classic dishes done really well → Cozy Classic
- 👨‍🍳 Asking the chef what they'd recommend → Artisan Snob

### Question 3: How do you plan a vacation?
- 🗺️ Detailed itinerary with the best hidden spots → Artisan Snob
- 🏖️ Book a cozy place and see what happens → Cozy Classic
- 🥾 Adventure-packed with hiking, activities, and challenges → Bold Adventurer
- 🧘 Wellness retreat focused on health and balance → Health Nut

### Question 4: What's your ideal Friday night?
- 🍷 Intimate dinner at a place nobody knows about → Artisan Snob
- 🎬 Movie marathon in pajamas with comfort snacks → Cozy Classic
- 🎉 Something spontaneous and high-energy → Bold Adventurer
- 🧘‍♀️ Yoga class followed by a healthy home-cooked meal → Health Nut

### Question 5: How do you approach your work?
- 💪 Push hard, take risks, get it done → Bold Adventurer
- 🌱 Balanced and sustainable, health comes first → Health Nut
- 🎯 Focused on quality and doing it the right way → Artisan Snob
- 📚 Steady and reliable, tried-and-true methods → Cozy Classic

### Question 6: What sounds like the perfect afternoon?
- 🏔️ Trying something you've never done before → Bold Adventurer
- 📖 Relaxing at home with your favorite comfort activities → Cozy Classic
- 🏃‍♂️ Active outdoor time that makes you feel good → Health Nut
- 🎭 Discovering a hidden gem – gallery, shop, or experience → Artisan Snob

## Logic & Flow

1. User sees welcome screen with quiz title
2. User answers 6 questions (one at a time)
3. Each answer maps to one of the four personalities
4. After all questions, tally which personality got the most selections
5. Display results showing ALL four percentages
6. Show corresponding coffee recommendations for each personality with images

## Technical Notes

- Build with Next.js
- Responsive design (mobile-friendly)
- Simple state management (no database needed)
- Images stored in `public/` folder
- Font: Garamond size 11
- Use en dash (–) with spaces, not em dash (—)
