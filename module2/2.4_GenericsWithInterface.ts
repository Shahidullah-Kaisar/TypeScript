{
  // intercae - generic

  //A generic interface that takes two type parameters:
  // T = type of smartwatch
  // X = optional type of bike (default is null)

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T; // T determines the smartwatch type
    bike?: X; // X determines the bike type (optional)
  }

  //Define a specific type of smartwatch (Emilab)

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  //A developer who uses an Emilab smartwatch but does not have a bike

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Sajib",
    computer: {
      brand: "Asus",
      model: "X-255UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
    // bike is not included because it's optional
  };

  // Define a more advanced smartwatch type (Apple)

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  // Define a bike type (Yamaha)

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  // A developer who uses both an Apple Watch and a Yamaha bike

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rich Dev",
    computer: {
      brand: "HP",
      model: "X-25UR",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "Something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
