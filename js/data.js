// Site content and contact channels. Edit this file to update rates, rooms or socials.

window.MV = {
  contact: {
    phone: "+6088888777",
    phoneLabel: "+60 88-888 777",
    mobile: "60177776750",          // WhatsApp, digits only with country code
    mobileLabel: "+60 17-777 6750",
    email: "enquiry@mvrkinabalu.com",
    address: "Jalan Tenompok Bundu Tuhan, 89300 Bundu Tuhan, Sabah, Malaysia",
    booking: "https://www.swiftbook.io/inst/#home?propertyId=601MyqnLJ2mXTv4dsSePKpilxgQCgqv7oMjMzMjc=&JDRN=Y",
    maps: "https://www.google.com/maps/search/?api=1&query=Mountain+Valley+Resort+Bundu+Tuhan",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.938586353115!2d116.52627161476798!3d6.0031715956519935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b9904db74073d%3A0xabcd439c9265e989!2sMountain%20Valley%20Resort!5e0!3m2!1sen!2smy!4v1568855260288!5m2!1sen!2smy"
  },

  // Only verified accounts are listed. To add one, append { id, label, url }.
  // Supported icon ids: facebook, instagram, tiktok, youtube, tripadvisor, whatsapp, email, phone, maps
  socials: [
    { id: "facebook", label: "Facebook", url: "https://www.facebook.com/mvresort/" },
    { id: "instagram", label: "Instagram", url: "https://www.instagram.com/mountainvalleyresort/" },
    { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/60177776750" },
    { id: "phone",    label: "Call us",  url: "tel:+6088888777" },
    { id: "email",    label: "Email",    url: "mailto:enquiry@mvrkinabalu.com" },
    { id: "maps",     label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Mountain+Valley+Resort+Bundu+Tuhan" }
  ],

  // type: standard | deluxe | superior | family | suite
  // rates: [weekday Mon–Thu, weekend Fri–Sun] in RM
  rooms: [
    { no: "1",  name: "Tenompok Courtyard Lounge", type: "suite", rates: [663, 663], dir: "TPK", imgs: [1,2,3,4,5,6],
      beds: "1 Queen + 1 Single", feats: ["Private garden courtyard", "Lounge with long dining table", "Water feature", "Garden balcony"] },
    { no: "2",  name: "Family Room", type: "family", rates: [500, 526], dir: "FML2", imgs: [1,2,3,4],
      beds: "1 Queen + 1 Single", feats: ["Private outdoor sitting area"] },
    { no: "3",  name: "Superior Deluxe with Balcony", type: "superior", rates: [465, 488], dir: "DLX3", imgs: [1,2,3,4,5,6,8,9,10],
      beds: "1 Queen", feats: ["Valley view", "Private balcony"] },
    { no: "3A", name: "Deluxe Room", type: "deluxe", rates: [388, 407], dir: "DLX3A", imgs: [2,3,4,6],
      beds: "1 Queen", feats: ["Overlooking the valley", "Private balcony"] },
    { no: "5",  name: "Deluxe Room", type: "deluxe", rates: [388, 407], dir: "DLX5", imgs: [3,4,6,8],
      beds: "1 Queen", feats: ["Overlooking the valley", "Private balcony"] },
    { no: "6",  name: "Superior Deluxe with Balcony", type: "superior", rates: [465, 488], dir: "DLX6", imgs: [1,2,3,4,5,7,8],
      beds: "1 Queen", feats: ["Valley view", "Private balcony"] },
    { no: "7",  name: "Deluxe Room", type: "deluxe", rates: [388, 407], dir: "DLX7", imgs: [1,2,3,4,5],
      beds: "1 Queen", feats: ["Overlooking the valley", "Private balcony"] },
    { no: "8",  name: "Standard Room", type: "standard", rates: [286, 300], dir: "STD8", imgs: [1,2,3,4,5],
      beds: "1 Queen", feats: ["Glimpse of the valley", "Private balcony"] },
    { no: "9",  name: "Family with Mountain View", type: "family", rates: [531, 557], dir: "FML9", imgs: [1,2,3,4,5,6],
      beds: "1 Queen + 1 Single", feats: ["Mountain & valley view", "Shared living room with Room 10", "Private balcony"] },
    { no: "10", name: "Family with Mountain View", type: "family", rates: [531, 557], dir: "FML10", imgs: [1,2,3,4,5,6],
      beds: "1 Queen + 1 Single", feats: ["Mountain & valley view", "Shared living room with Room 9", "Private balcony"] },
    { no: "11", name: "Superior Deluxe", type: "superior", rates: [475, 498], dir: "DLX11", imgs: [1,2,3,4,5,6,7,8,9],
      beds: "1 Queen", feats: ["Mountain & valley view"] },
    { no: "12", name: "Superior Deluxe", type: "superior", rates: [460, 483], dir: "DLX12", imgs: [1,2,5,7,8],
      beds: "1 Queen", feats: ["Valley view"] },
    { no: "13", name: "Standard Room", type: "standard", rates: [286, 300], dir: "STD13", imgs: [1,2,3,4],
      beds: "1 Queen", feats: ["View to back courtyard"] },
    { no: "13A", name: "Standard Twin", type: "standard", rates: [286, 300], dir: "STD13A", imgs: [1,2,3,5],
      beds: "2 Singles", feats: ["Glimpse of the valley"] },
    { no: "15", name: "Superior Deluxe", type: "superior", rates: [475, 498], dir: "DLX15", imgs: [1,2,3,5],
      beds: "1 Queen", feats: ["Mountain & valley view"] }
  ],


  facilities: [
    { icon: "wifi",    title: "Free Wi-Fi", text: "Available in every room and throughout the resort." },
    { icon: "parking", title: "Free private parking", text: "First come, first served. Vehicles are parked at the owner's risk." },
    { icon: "shield",  title: "24/7 security", text: "Round-the-clock security for the safety and comfort of all guests." },
    { icon: "bag",     title: "Luggage storage", text: "Store bags before check-in or after check-out (same day only)." },
    { icon: "glass",   title: "Banquets & events", text: "Intimate events, weddings, meetings and corporate gatherings. Ask our sales team." },
    { icon: "bell",    title: "Room service", text: "Contact reception any time you need assistance." },
    { icon: "table",   title: "Rummy / Mahjong table", text: "On request for in-house guests, subject to availability." },
    { icon: "iron",    title: "Iron & board", text: "Provided in every room." }
  ],

  gallery: {
    building:   [1, 6],
    reception:  [7, 12],
    facilities: [13, 23],
    room:       [24, 38],
    restaurant: [39, 46],
    cafe:       [47, 52],
    bathroom:   [53, 56]
  }
};
