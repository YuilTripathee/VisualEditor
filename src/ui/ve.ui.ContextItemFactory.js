/*!
 * VisualEditor UserInterface ContextItemFactory class.
 *
 * @copyright 2011-2015 VisualEditor Team and others; see http://ve.mit-license.org
 */

/**
 * Factory for context items.
 *
 * @class
 * @extends OO.Factory
 * @mixins ve.ui.ModeledFactory
 *
 * @constructor
 */
ve.ui.ContextItemFactory = function VeUiContextItemFactory() {
	// Parent constructor
	ve.ui.ContextItemFactory.super.call( this );

	// Mixin constructors
	ve.ui.ModeledFactory.call( this );
};

/* Inheritance */

OO.inheritClass( ve.ui.ContextItemFactory, OO.Factory );
OO.mixinClass( ve.ui.ContextItemFactory, ve.ui.ModeledFactory );

/* Methods */

/**
 * Check if an item is embeddable.
 *
 * @param {string} name Symbolic item name
 * @return {boolean} Item is embeddable
 */
ve.ui.ContextItemFactory.prototype.isEmbeddable = function ( name ) {
	if ( Object.prototype.hasOwnProperty.call( this.registry, name ) ) {
		return !!this.registry[name].static.embeddable;
	}
	throw new Error( 'Unrecognized symbolic name: ' + name );
};

/* Initialization */

ve.ui.contextItemFactory = new ve.ui.ContextItemFactory();
