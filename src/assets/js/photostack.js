;(function(window) {[]

	'use strict';

	var transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	};

	var transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];

	function extend(a, b) {
		for (let key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}

		return a;
	}

	function shuffleMArray(marray) {
		var arr = [], marrlen = marray.length, inArrLen = marray[0].length;

		for (let i=0; i < marrlen; i++) {
			arr = arr.concat(marray[i]);
		}

		// shuffle 2 d array
		arr = shuffleArr(arr);
		// to 2d
		const newmarr = []
		let pos = 0;

		for (let j = 0; j < marrlen; j++) {
			const tmparr = [];

			for (let k = 0; k < inArrLen; k++) {
				tmparr.push( arr[ pos ] );
				pos++;
			}

			newmarr.push(tmparr);
		}

		return newmarr;
	}

	function shuffleArr(array) {
		let m = array.length;
		let t;
		let  i;

		// While there remain elements to shuffle…
		while (m) {
			// Pick a remaining element…
			i = Math.floor(Math.random() * m--);
			// And swap it with the current element.
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}

		return array;
	}

	function Photostack(el, options) {
		this.el = el;
		this.inner = this.el.querySelector('div');
		this.allItems = [].slice.call(this.inner.children);
		this.allItemsCount = this.allItems.length;
		if (!this.allItemsCount) return;
		this.items = [].slice.call(this.inner.querySelectorAll('figure:not([data-dummy])'));
		this.itemsCount = this.items.length;
		// index of the current photo
		this.current = 0;
		this.options = extend({}, this.options);
  		extend(this.options, options);
  		this._init();
	}

	Photostack.prototype.options = {};

	Photostack.prototype._init = function() {
		this.currentItem = this.items[this.current];
		this._getSizes();
		this._initEvents();
	};

	Photostack.prototype._initEvents = function() {
		var self = this;

		this.started = true;
		this._showPhoto(self.current);


		window.addEventListener('resize', function() {
			self._resizeHandler();
		});
	};

	Photostack.prototype._resizeHandler = function() {
		var self = this;

		function delayed() {
			self._resize();
			self._resizeTimeout = null;
		}

		if (this._resizeTimeout) clearTimeout(this._resizeTimeout);
		this._resizeTimeout = setTimeout(delayed, 200);
	}

	Photostack.prototype._resize = function() {
		// Check if div size is 75 pixels different than the previous render.
		// Only re-render if substantial difference to fix mobile Chrome resize on navbar hide
		const changedHeight = Math.abs(this.sizes.inner.height - this.inner.offsetHeight) > 75;
		const changedWidth = Math.abs(this.sizes.inner.width - this.inner.offsetWidth) > 75;

		console.log(changedHeight, changedWidth);

		if (changedHeight || changedWidth) {
			this._getSizes();
			this._shuffle(true);
		}
	};

	Photostack.prototype._showPhoto = function(pos) {
		if (this.isShuffling) return false;

		this.isShuffling = true;
		this.currentItem.classList.remove('photostack-current');

		// change current
		this.current = pos;
		this.currentItem = this.items[this.current];
		this._shuffle();
	}

	// display items (randomly)
	Photostack.prototype._shuffle = function(resize) {
		var iter = resize ? 1 : this.currentItem.getAttribute('data-shuffle-iteration') || 1;

		if (iter <= 0 || !this.started) {
			iter = 1;
		}

		var overlapFactor = .5;
			// lines & columns
		var	lines = Math.ceil(this.sizes.inner.width / (this.sizes.item.width * overlapFactor) );
		var columns = Math.ceil(this.sizes.inner.height / (this.sizes.item.height * overlapFactor) );
			// since we are rounding up the previous calcs we need to know how much more we are adding to the calcs for both x and y axis
		var addX = lines * this.sizes.item.width * overlapFactor + this.sizes.item.width/2 - this.sizes.inner.width;
		var addY = columns * this.sizes.item.height * overlapFactor + this.sizes.item.height/2 - this.sizes.inner.height;
			// we will want to center the grid
		var extraX = addX / 2;
		var extraY = addY / 2;
			// max and min rotation angles
		var maxrot = 35;
		var minrot = -35;
		var self = this;
			// translate/rotate items
		var moveItems = function() {
				--iter;
				// create a "grid" of possible positions
				var grid = [];
				// populate the positions grid
				for (var i = 0; i < columns; ++i) {
					var col = grid[ i ] = [];

					for (var j = 0; j < lines; ++j) {
						var xVal = j * (self.sizes.item.width * overlapFactor) - extraX,
							yVal = i * (self.sizes.item.height * overlapFactor) - extraY,
							olx = 0, oly = 0;

						if (self.started && iter === 0) {
							var ol = self._isOverlapping( { x : xVal, y : yVal } );

							if (ol.overlapping) {
								olx = ol.noOverlap.x;
								oly = ol.noOverlap.y;
								var r = Math.floor( Math.random() * 3 );
								switch(r) {
									case 0 : olx = 0; break;
									case 1 : oly = 0; break;
								}
							}
						}

						col[j] = {
							x: xVal + olx,
							y: yVal + oly
						};
					}
				}

				// shuffle
				grid = shuffleMArray(grid);

				var l = 0
				var c = 0;
				var cntItemsAnim = 0;

				self.allItems.forEach(function(item, i) {
					// pick a random item from the grid
					if (l === lines - 1) {
						c = c === columns - 1 ? 0 : c + 1;
						l = 1;
					} else {
						++l
					}

					var randXPos = Math.floor(Math.random() * lines);
					var randYPos = Math.floor(Math.random() * columns);
					var gridVal = grid[c][l-1];
					var translation = {
						x: gridVal.x,
						y: gridVal.y
					};

					var onEndTransitionFn = function() {
						++cntItemsAnim;
						this.removeEventListener(transEndEventName, onEndTransitionFn);

						if (cntItemsAnim === self.allItemsCount) {
							if (iter > 0) {
								moveItems.call();
							} else {
								self.isShuffling = false;

								if (typeof self.options.callback === 'function') {
									self.options.callback(self.currentItem);
								}
							}
						}
					};

					if (self.items.indexOf(item) === self.current && self.started && iter === 0) {
						self.currentItem.style.WebkitTransform = 'translate(' + self.centerItem.x + 'px,' + self.centerItem.y + 'px) rotate(0deg)';
						self.currentItem.style.msTransform = 'translate(' + self.centerItem.x + 'px,' + self.centerItem.y + 'px) rotate(0deg)';
						self.currentItem.style.transform = 'translate(' + self.centerItem.x + 'px,' + self.centerItem.y + 'px) rotate(0deg)';
						self.currentItem.classList.add('photostack-current');
					} else {
						item.style.WebkitTransform = 'translate(' + translation.x + 'px,' + translation.y + 'px) rotate(' + Math.floor(Math.random() * (maxrot - minrot + 1) + minrot) + 'deg)';
						item.style.msTransform = 'translate(' + translation.x + 'px,' + translation.y + 'px) rotate(' + Math.floor(Math.random() * (maxrot - minrot + 1) + minrot) + 'deg)';
						item.style.transform = 'translate(' + translation.x + 'px,' + translation.y + 'px) rotate(' + Math.floor(Math.random() * (maxrot - minrot + 1) + minrot) + 'deg)';
					}

					if(self.started) {
						item.addEventListener(transEndEventName, onEndTransitionFn);
					}
				} );
			};

		moveItems.call();
	}

	Photostack.prototype._getSizes = function() {
		this.sizes = {
			inner: {
				width: this.inner.offsetWidth,
				height: this.inner.offsetHeight
			},
			item: {
				width: this.currentItem.offsetWidth,
				height: this.currentItem.offsetHeight
			}
		};

		// translation values to center an item
		this.centerItem = {
			x: this.sizes.inner.width / 2 - this.sizes.item.width / 2,
			y: this.sizes.inner.height / 2 - this.sizes.item.height / 2
		};
	}

	Photostack.prototype._isOverlapping = function(itemVal) {
		var dxArea = this.sizes.item.width + this.sizes.item.width / 3; // adding some extra avoids any rotated item to touch the central area
		var dyArea = this.sizes.item.height + this.sizes.item.height / 3;
		var areaVal = {
			x: this.sizes.inner.width / 2 - dxArea / 2,
			y: this.sizes.inner.height / 2 - dyArea / 2
		};
		var dxItem = this.sizes.item.width;
		var dyItem = this.sizes.item.height;

		if (!(( itemVal.x + dxItem ) < areaVal.x ||
			itemVal.x > ( areaVal.x + dxArea ) ||
			( itemVal.y + dyItem ) < areaVal.y ||
			itemVal.y > ( areaVal.y + dyArea )) ) {
				// how much to move so it does not overlap?
				// move left / or move right
				var left = Math.random() < 0.5;
				var randExtraX = Math.floor( Math.random() * (dxItem/4 + 1) );
				var randExtraY = Math.floor( Math.random() * (dyItem/4 + 1) );
				var noOverlapX = left ? (itemVal.x - areaVal.x + dxItem) * -1 - randExtraX : (areaVal.x + dxArea) - (itemVal.x + dxItem) + dxItem + randExtraX;
				var noOverlapY = left ? (itemVal.y - areaVal.y + dyItem) * -1 - randExtraY : (areaVal.y + dyArea) - (itemVal.y + dyItem) + dyItem + randExtraY;

				return {
					overlapping : true,
					noOverlap: { x: noOverlapX, y: noOverlapY }
				};
		}

		return { overlapping: false };
	};

	// add to global namespace
	window.Photostack = Photostack;

})(window);
