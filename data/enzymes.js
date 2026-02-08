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
  },
  trs: {
  name: "Aminoacyl-tRNA Synthetase",
  process: "Translation",
  function: "Aminoacyl-tRNA synthetase catalyzes the attachment of a specific amino acid to its corresponding tRNA, ensuring fidelity of the genetic code.",
  activities: [
    "Recognizes correct amino acid",
    "Binds corresponding tRNA",
    "Forms aminoacyl-tRNA complex"
  ],
  exam: "Each amino acid has a specific aminoacyl-tRNA synthetase.",
  error: "Confusing synthetase activity with ribosomal function.",
  image: "images/trs.png"
},

if: {
  name: "Initiation Factors",
  process: "Translation",
  function: "Initiation factors assist in the assembly of ribosomal subunits at the start codon of mRNA to begin protein synthesis.",
  activities: [
    "Bind to small ribosomal subunit",
    "Position initiator tRNA",
    "Initiate translation"
  ],
  exam: "IF-1, IF-2, and IF-3 are involved in prokaryotic translation initiation.",
  error: "Mixing initiation factors with elongation factors.",
  image: "images/if.png"
},

ef: {
  name: "Elongation Factors",
  process: "Translation",
  function: "Elongation factors facilitate the entry of aminoacyl-tRNA into the ribosome and the translocation of the ribosome along mRNA.",
  activities: [
    "Deliver aminoacyl-tRNA to A site",
    "Assist ribosomal translocation",
    "Maintain elongation accuracy"
  ],
  exam: "EF-Tu and EF-G are key elongation factors in prokaryotes.",
  error: "Assuming elongation occurs without factors.",
  image: "images/ef.png"
},

rf: {
  name: "Release Factors",
  process: "Translation",
  function: "Release factors recognize stop codons and terminate polypeptide synthesis by releasing the completed protein.",
  activities: [
    "Recognize stop codon",
    "Release polypeptide chain",
    "Dissociate ribosomal complex"
  ],
  exam: "Stop codons are recognized by release factors, not tRNA.",
  error: "Thinking tRNA binds to stop codons.",
  image: "images/rf.png"
};



