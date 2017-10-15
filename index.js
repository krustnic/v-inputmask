import Inputmask from 'inputmask';

var Settings = {
    getInputMaskOptions : function(binding) {
        return binding.value;
    },

    getTargetElement : function(sourceEl) {
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
    install : function(Vue) {
        Vue.directive('inputmask', {
            bind: function (el, binding, vnode) {
                var inputEl = Settings.getTargetElement(el);
                var maskOptions = Settings.getInputMaskOptions(binding);

                Inputmask(maskOptions).mask(inputEl);
            },

            unbind: function (el, binding, vnode) {
                var inputEl = Settings.getTargetElement(el);

                if ( inputEl.inputmask ) {
                    inputEl.inputmask.remove();
                }
            },

            componentUpdated: function(el, binding){
                var inputEl = Settings.getTargetElement(el);
                var maskOptions = Settings.getInputMaskOptions(binding);

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