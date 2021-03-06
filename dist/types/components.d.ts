/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface AgcSorghumHarvestLossInputs {
    'socket': string;
  }
  interface AgcSorghumHarvestLossInputsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcSorghumHarvestLossProgress {
    'socket': string;
  }
  interface AgcSorghumHarvestLossProgressAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcSorghumHarvestLossResultsPlaceholder {}
  interface AgcSorghumHarvestLossResultsPlaceholderAttributes extends StencilHTMLAttributes {}

  interface AgcSorghumHarvestLossResults {
    'socket': string;
  }
  interface AgcSorghumHarvestLossResultsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcSorghumHarvestLoss {
    'mode': "full" | "step";
    'socket': string;
    'tract': string;
    'units': any;
  }
  interface AgcSorghumHarvestLossAttributes extends StencilHTMLAttributes {
    'mode'?: "full" | "step";
    'onAgcCalculated'?: (event: CustomEvent) => void;
    'onAgcStepChanged'?: (event: CustomEvent) => void;
    'socket'?: string;
    'tract'?: string;
    'units'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgcSorghumHarvestLossInputs': Components.AgcSorghumHarvestLossInputs;
    'AgcSorghumHarvestLossProgress': Components.AgcSorghumHarvestLossProgress;
    'AgcSorghumHarvestLossResultsPlaceholder': Components.AgcSorghumHarvestLossResultsPlaceholder;
    'AgcSorghumHarvestLossResults': Components.AgcSorghumHarvestLossResults;
    'AgcSorghumHarvestLoss': Components.AgcSorghumHarvestLoss;
  }

  interface StencilIntrinsicElements {
    'agc-sorghum-harvest-loss-inputs': Components.AgcSorghumHarvestLossInputsAttributes;
    'agc-sorghum-harvest-loss-progress': Components.AgcSorghumHarvestLossProgressAttributes;
    'agc-sorghum-harvest-loss-results-placeholder': Components.AgcSorghumHarvestLossResultsPlaceholderAttributes;
    'agc-sorghum-harvest-loss-results': Components.AgcSorghumHarvestLossResultsAttributes;
    'agc-sorghum-harvest-loss': Components.AgcSorghumHarvestLossAttributes;
  }


  interface HTMLAgcSorghumHarvestLossInputsElement extends Components.AgcSorghumHarvestLossInputs, HTMLStencilElement {}
  var HTMLAgcSorghumHarvestLossInputsElement: {
    prototype: HTMLAgcSorghumHarvestLossInputsElement;
    new (): HTMLAgcSorghumHarvestLossInputsElement;
  };

  interface HTMLAgcSorghumHarvestLossProgressElement extends Components.AgcSorghumHarvestLossProgress, HTMLStencilElement {}
  var HTMLAgcSorghumHarvestLossProgressElement: {
    prototype: HTMLAgcSorghumHarvestLossProgressElement;
    new (): HTMLAgcSorghumHarvestLossProgressElement;
  };

  interface HTMLAgcSorghumHarvestLossResultsPlaceholderElement extends Components.AgcSorghumHarvestLossResultsPlaceholder, HTMLStencilElement {}
  var HTMLAgcSorghumHarvestLossResultsPlaceholderElement: {
    prototype: HTMLAgcSorghumHarvestLossResultsPlaceholderElement;
    new (): HTMLAgcSorghumHarvestLossResultsPlaceholderElement;
  };

  interface HTMLAgcSorghumHarvestLossResultsElement extends Components.AgcSorghumHarvestLossResults, HTMLStencilElement {}
  var HTMLAgcSorghumHarvestLossResultsElement: {
    prototype: HTMLAgcSorghumHarvestLossResultsElement;
    new (): HTMLAgcSorghumHarvestLossResultsElement;
  };

  interface HTMLAgcSorghumHarvestLossElement extends Components.AgcSorghumHarvestLoss, HTMLStencilElement {}
  var HTMLAgcSorghumHarvestLossElement: {
    prototype: HTMLAgcSorghumHarvestLossElement;
    new (): HTMLAgcSorghumHarvestLossElement;
  };

  interface HTMLElementTagNameMap {
    'agc-sorghum-harvest-loss-inputs': HTMLAgcSorghumHarvestLossInputsElement
    'agc-sorghum-harvest-loss-progress': HTMLAgcSorghumHarvestLossProgressElement
    'agc-sorghum-harvest-loss-results-placeholder': HTMLAgcSorghumHarvestLossResultsPlaceholderElement
    'agc-sorghum-harvest-loss-results': HTMLAgcSorghumHarvestLossResultsElement
    'agc-sorghum-harvest-loss': HTMLAgcSorghumHarvestLossElement
  }

  interface ElementTagNameMap {
    'agc-sorghum-harvest-loss-inputs': HTMLAgcSorghumHarvestLossInputsElement;
    'agc-sorghum-harvest-loss-progress': HTMLAgcSorghumHarvestLossProgressElement;
    'agc-sorghum-harvest-loss-results-placeholder': HTMLAgcSorghumHarvestLossResultsPlaceholderElement;
    'agc-sorghum-harvest-loss-results': HTMLAgcSorghumHarvestLossResultsElement;
    'agc-sorghum-harvest-loss': HTMLAgcSorghumHarvestLossElement;
  }


}
