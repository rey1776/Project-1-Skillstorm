const contacts = [
    {
        name: "Naruto Uzamaki",
        imgURL: "data:image/jpeg;base64,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",
        phone: "(305) 710 -6164)",
        email: "NarutoUzamaki_7@Konoha.com"
    },
    {
        name: "Kakashi Hatake",
        imgURL: "https://th.bing.com/th/id/OIP.rozXcxj9i7i99h2XXAOdxQHaKL?w=142&h=195&c=7&r=0&o=5&pid=1.7",
        phone: "(786) 897 - 8976",
        email: "KakashiHatake@Anbu.com"
    }
]

export default contacts;