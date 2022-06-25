const fetch = require('node-fetch')

const apiKaynak = "https://api.thecatapi.com/v1"

class randomImage {
    #apiKey;
    #type;

    constructor(apiKey,type){
        if(!apiKey){
            throw new Error("sorgulama yapabilmek için apiKey'i doğru yazdığınızdan emin olun.")
        }
        this.#apiKey = apiKey
        this.#type = type
    }

    // FOTOĞRAF İŞLEMLERİ

    // rastgele fotoğraf(kedi)
    async getRandomImage(useJSON=true) {
        const res = await fetch(apiKaynak+"/images/search",{
            method: "GET",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }
    //benim yüklediklerim
    async myImages(useJSON=true) {
        const res = await fetch(apiKaynak+"/images",{
            method: "GET",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }
    //fotoğraf yükleme
    async uploadImage(image,useJSON=true){
        if(!image){
            throw new Error("Yükleme yapabilmek için bir fotoğraf gereklidir.")
        }
        const res = await fetch(apiKaynak+"/images/upload",{
            method: "POST",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }
    //idsi belirtilen fotoğrafı çekme
    async getImage(id,useJSON=true){
        if(!id){
            throw new Error("ID belirtmezseniz istediğiniz fotoğrafı tahmin edemem.")
        }
        const res = await fetch(apiKaynak+"/images/"+toString(id),{
            method: "GET",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }
    //idsi belirtilen fotoğrafı silme
    async deleteImage(id,useJSON=true){
        if(!id){
            throw new Error("ID belirtmeniz gerekmektedir.")
        }
        const res = await fetch(apiKaynak+"/images/"+toString(id),{
            method: "DELETE",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }
    //idsi belirtilen fotoğraf hakkında bilgi çekme
    async imageAnalysis(id,useJSON=true){
        if(!id){
            throw new Error("ID belirtmeniz gerekmektedir.")
        }
        const res = await fetch(apiKaynak+"/images/"+toString(id)+"/analysis",{
            method: "GET",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }
    
    // FOTOĞRAF İŞLEMLERİ

    // TÜR İŞLEMLERİ

    // bütün türleri(ırkları) çekme
    async getBreeds(useJSON=true){
        const res = await fetch(apiKaynak+"/breeds",{
            method: "GET",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }
    // tür araştırma
    async breedSearch(searchQuery,useJSON=true){
        const res = await fetch(apiKaynak+"/breeds/search?q="+toString(searchQuery),{
            method: "GET",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }
    
    // TÜR İŞLEMLERİ

    // KATEGORİ İŞLEMLERİ

    // kategoriler
    async categories(useJSON=true){
        const res = await fetch(apiKaynak+"/categories",{
            method: "GET",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }

    // KATEGORİ İŞLEMLERİ

    // OYLAMA İŞLEMLERİ


    //benim oylarım
    async myVotes(useJSON=true){
        const res = await fetch(apiKaynak+"/votes",{
            method: "GET",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }

    // idsi belirtilen fotoğrafın oylarını çeker
    async getVote(id,useJSON=true){
        if(!id){
            throw new Error("ID belirtmeniz gerekmektedir.")
        }
        const res = await fetch(apiKaynak+"/votes/"+toString(id),{
            method: "GET",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }
    //idsi belirtilen fotoğrafın oylarını siler
    async deleteVote(id,useJSON=true){
        if(!id){
            throw new Error("ID belirtmeniz gerekmektedir.")
        }
        const res = await fetch(apiKaynak+"/votes/"+toString(id),{
            method: "DELETE",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }

     // OYLAMA İŞLEMLERİ

    // FAVORİ İŞLEMLERİ

    // favorileri çeker
    async favorites(sub_id=nil,limit=nil,page=nil,useJSON=true){
        const tempEndpoint = apiKaynak+"/favourites"
        if(sub_id){
            tempEndpoint += "?sub_id="+toString(sub_id)
        }
        if(limit){
            tempEndpoint += "?limit="+toString(limit)
        }
        if(page){
            tempEndpoint += "?page="+toString(page)
        }
        const res = await fetch(tempEndpoint,{
            method: "GET",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }

    // idsi belirtilen fotoğrafın favorilerini çeker
    async getFavorite(id,useJSON=true){
        if(!id){
            throw new Error("ID belirtmeniz gerekmektedir.")
        }
        const res = await fetch(apiKaynak+"/favourites/"+toString(id),{
            method: "GET",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }
    // idsi belirtilen fotoğrafın favorilerini siler
    async deleteFavorite(id,useJSON=true){
        if(!id){
            throw new Error("ID belirtmeniz gerekmektedir.")
        }
        const res = await fetch(apiKaynak+"/favourites/"+toString(id),{
            method: "DELETE",
            headers: {
                'x-api-key': this.#apiKey
            }
        })
        if(useJSON){
            const rj = await res.json()
            return rj
        }else{
            return res
        }
    }


     // FAVORİ İŞLEMLERİ
}

module.exports = randomImage