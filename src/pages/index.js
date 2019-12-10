import Loadable from "react-loadable"
import Loading from "common/loading";


export const Analyze = Loadable({
    loader:_=>import("./dashboard/analyze"),
    loading:Loading
})
export const Monitore = Loadable({
    loader:_=>import("./dashboard/monitore"),
    loading:Loading
})
export const Workbench = Loadable({
    loader:_=>import("./dashboard/workbench"),
    loading:Loading
})
export const Five = Loadable({
    loader:_=>import("./anomaly/five"),
    loading:Loading
})
export const Fourfour = Loadable({
    loader:_=>import("./anomaly/fourfour"),
    loading:Loading
})
export const Fourthree = Loadable({
    loader:_=>import("./anomaly/fourthree"),
    loading:Loading
})
export const Basedetail = Loadable({
    loader:_=>import("./detail/basedetail"),
    loading:Loading
})
export const Highdetail = Loadable({
    loader:_=>import("./detail/highdetail"),
    loading:Loading
})
export const Advancedform = Loadable({
    loader:_=>import("./form/advancedform"),
    loading:Loading
})
export const Baseform = Loadable({
    loader:_=>import("./form/baseform"),
    loading:Loading
})
export const Stepform = Loadable({
    loader:_=>import("./form/stepform"),
    loading:Loading
})
export const Braineditor = Loadable({
    loader:_=>import("./grapheditor/braineditor"),
    loading:Loading
})
export const Processeditor = Loadable({
    loader:_=>import("./grapheditor/processeditor"),
    loading:Loading
})
export const Topologyeditor = Loadable({
    loader:_=>import("./grapheditor/topologyeditor"),
    loading:Loading
})
export const Cardlist = Loadable({
    loader:_=>import("./list/cardlist"),
    loading:Loading
})
export const Findtable = Loadable({
    loader:_=>import("./list/findtable"),
    loading:Loading
})
export const Standardlist = Loadable({
    loader:_=>import("./list/standardlist"),
    loading:Loading
})
export const Searcharticle = Loadable({
    loader:_=>import("./list/search/searcharticle"),
    loading:Loading
})
export const Searchproject = Loadable({
    loader:_=>import("./list/search/searchproject"),
    loading:Loading
})
export const Searchapp = Loadable({
    loader:_=>import("./list/search/searchapp"),
    loading:Loading
})
export const Login = Loadable({
    loader:_=>import("./login"),
    loading:Loading
})
export const Registe = Loadable({
    loader:_=>import("./registe"),
    loading:Loading
})
export const Failed = Loadable({
    loader:_=>import("./result/failed"),
    loading:Loading
})
export const Success = Loadable({
    loader:_=>import("./result/success"),
    loading:Loading
})
export const Usercontent = Loadable({
    loader:_=>import("./user/usercontent"),
    loading:Loading
})
export const Userset = Loadable({
    loader:_=>import("./user/userset"),
    loading:Loading
})

