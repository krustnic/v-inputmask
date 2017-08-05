import Inputmask from 'inputmask';

const Settings = {
    getInputMaskOptions(binding) {
        return binding.value;
    },

    getTargetElement(sourceEl) {
        if (sourceEl.tagName === 'INPUT') {
            return sourceEl;
        }

        if ( sourceEl.dataset['inputmaskTarget'] ) {
            return sourceEl.querySelector(sourceEl.dataset['inputmaskTarget']);
        }

        return sourceEl.querySelector('input');
    }
};

export default {
    install (Vue) {
        Vue.directive('inputmask', {
            bind: function (el, binding, vnode) {
                let inputEl = Settings.getTargetElement(el);
                let maskOptions = Settings.getInputMaskOptions(binding);

                Inputmask(maskOptions).mask(inputEl);
            },

            unbind: function (el, binding, vnode) {
                let inputEl = Settings.getTargetElement(el);

                if ( inputEl.inputmask ) {
                    inputEl.inputmask.remove();
                }
            },

            componentUpdated(el, binding){
                let inputEl = Settings.getTargetElement(el);
                let maskOptions = Settings.getInputMaskOptions(binding);

                if ( binding.value !== binding.oldValue ) {
                    if ( inputEl.inputmask ) {
                        inputEl.inputmask.remove();
                    }

                    Inputmask(maskOptions).mask(inputEl);
                }
            }
        });
    }
}