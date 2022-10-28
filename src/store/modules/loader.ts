import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'loaderModule' })
export default class LoaderModule extends VuexModule {
  loadingStatus = false;

  // Mutation
  @Mutation
  setLoadingStatus(status: boolean) {
    this.loadingStatus = status;
  }

  @Action({ commit: 'setLoadingStatus' })
  changeLoading(status: boolean) {
    return status;
  }
}
