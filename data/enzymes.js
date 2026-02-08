const enzymes = {
  ori: {
    name: "Origin of Replication (OriC)",
    process: "DNA Replication",
    function: "OriC is the specific DNA sequence where replication begins. It allows initiator proteins to bind and unwind the DNA, enabling replication forks to form.",
    activities: [
      "Binding of DnaA protein",
      "Local DNA unwinding",
      "Recruitment of helicase"
    ],
    exam: "Replication always starts at a fixed origin site (OriC in prokaryotes).",
    error: "Students often confuse Ori with primer.",
    image: "images/ori.png"
  },

  helicase: {
    name: "DNA Helicase",
    process: "DNA Replication",
    function: "Helicase unwinds the DNA double helix by breaking hydrogen bonds, creating two single strands for replication.",
    activities: [
      "ATP-dependent unwinding",
      "Fork progression"
    ],
    exam: "Helicase separates DNA strands.",
    error: "Not responsible for synthesis.",
    image: "images/helicase.png"
  },

  ssb: {
    name: "SSB Proteins",
    process: "DNA Replication",
    function: "Single-strand binding proteins stabilize unwound DNA and prevent re-annealing.",
    activities: [
      "Bind ssDNA",
      "Prevent secondary structures"
    ],
    exam: "SSB proteins stabilize ssDNA.",
    error: "They do not unwind DNA.",
    image: "images/ssb.png"
  },

  primase: {
    name: "Primase",
    process: "DNA Replication",
    function: "Primase synthesizes short RNA primers required for DNA polymerase to begin synthesis.",
    activities: [
      "RNA primer synthesis"
    ],
    exam: "DNA polymerase cannot start without primer.",
    error: "Primase is not DNA polymerase.",
    image: "images/primase.png"
  },

  pol3: {
    name: "DNA Polymerase III",
    process: "DNA Replication",
    function: "DNA polymerase III is the main enzyme that synthesizes new DNA strands in the 5’→3’ direction.",
    activities: [
      "Leading strand synthesis",
      "Lagging strand synthesis"
    ],
    exam: "Main replicative enzyme.",
    error: "Pol III ≠ primer synthesis.",
    image: "images/pol3.png"
  },

  pol1: {
    name: "DNA Polymerase I",
    process: "DNA Replication",
    function: "DNA polymerase I removes RNA primers and replaces them with DNA.",
    activities: [
      "Primer removal",
      "DNA filling"
    ],
    exam: "Removes primers.",
    error: "Not main replicative enzyme.",
    image: "images/pol1.png"
  },

  clamp: {
    name: "Sliding Clamp",
    process: "DNA Replication",
    function: "Sliding clamp holds DNA polymerase firmly on DNA, increasing processivity.",
    activities: [
      "Stabilizes polymerase"
    ],
    exam: "Prevents enzyme dissociation.",
    error: "Not an enzyme.",
    image: "images/clamp.png"
  },

  ligase: {
    name: "DNA Ligase",
    process: "DNA Replication",
    function: "DNA ligase joins Okazaki fragments by forming phosphodiester bonds.",
    activities: [
      "Nick sealing"
    ],
    exam: "Joins fragments.",
    error: "Does not synthesize DNA.",
    image: "images/ligase.png"
  },

  gyrase: {
    name: "DNA Gyrase",
    process: "DNA Replication",
    function: "DNA gyrase relieves supercoiling ahead of the replication fork.",
    activities: [
      "Relieves torsional stress"
    ],
    exam: "Prevents overwinding.",
    error: "Not helicase.",
    image: "images/gyrase.png"
  }
};
