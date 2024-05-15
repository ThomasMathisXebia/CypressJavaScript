import visitPage from "../pages/visitPage.cy"
const visPage = new visitPage()

class visit {

    goBackHome(){
        visPage.buttonHome().click()
    }

}

export default visit