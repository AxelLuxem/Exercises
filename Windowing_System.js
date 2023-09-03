export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  };

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  };
};

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  };

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  };
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  };

  resize(newSize) {
    const maxWidth = Math.min(this.screenSize.width - this.position.x, newSize.width);
    const maxHeight = Math.min(this.screenSize.height - this.position.y, newSize.height);
    const width = Math.max(1, Math.min(newSize.width, maxWidth));
    const height = Math.max(1, Math.min(newSize.height, maxHeight));
    this.size = new Size(width, height);
  };

  move(pos) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    const newX = Math.max(0, Math.min(pos.x, maxX));
    const newY = Math.max(0, Math.min(pos.y, maxY));
    this.position = new Position(newX, newY);
  };
};

export const changeWindow = (programWindow) => {
  const newSize = new Size(400, 300);
  programWindow.resize(newSize);
  const newPosition = new Position(100, 150);
  programWindow.move(newPosition);
  return programWindow;
};
