-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 30, 2022 at 04:02 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ejemplo`
--

-- --------------------------------------------------------

--
-- Table structure for table `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(28, 'Ejemplo para modificar', 'Es muy recomendada en diferentes dietas debido a que posee minerales como el magnesio, potasio, ácido fólico y sustancias astringentes, la banana también ofrece un elevado aporte de fibra.', '1. Previene la depresión\r\nContribuyen a un mejoramiento de nuestro estado de ánimo y a incrementar la sensación de plenitud debido a su aporte vitamínico. También esta fruta es una aliada para reducir el estrés.\r\n\r\nConcretamente gracias a su contenido en triptófano que al procesarse en el organismo se transforma en serotonina.\r\n\r\nPor ser una fruta que aporta energía al cuerpo, disminuye la sensación de fatiga y desaliento que se presentan en los estados depresivos.\r\n\r\n2. Combate el estreñimiento\r\nLa fibra, un componente de esta fruta, es considerada de gran utilidad para mejorar el tránsito intestinal y los procesos digestivos.\r\n\r\nPara evitar el estreñimiento se recomienda consumir una banana entre 20 y 30 minutos después de cada comida.\r\n\r\n3. Protege el corazón\r\nLas bananas contribuyen a proteger el corazón debido a su contenido de potasio, un electrolito esencial para el buen funcionamiento del corazón.\r\n\r\nUn nivel adecuado de potasio y un nivel bajo de sodio puede reducir los riesgos cardiovasculares. Esto debido a que estos niveles favorecen que disminuya la presión arterial y mejore la circulación.\r\n\r\n4. Ayuda a la pérdida de peso\r\nPese a que son ricas en calorías, poseen más beneficios que desventajas en los procesos de pérdida de peso.\r\n\r\nSe estima que una porción puede aportar hasta un 10% del requerimiento diario de fibra mejorando la digestión. Además contiene vitamina B6 que ayuda a proteger contra la diabetes tipo 2 y la obesidad.\r\n\r\nAdemás, genera un efecto saciante de gran ayuda en cualquier dieta.', 'd5evrcoey0a7llvzwvxt'),
(29, 'Los beneficios de la dieta verde', 'Mejora tu salud y ayuda al medioambiente', 'Los hábitos alimenticios saludables cada vez toman mayor fuerza, no solo para lograr dietas balanceadas que contribuyen a objetivos estéticos, sino para sentirnos saludables y tener una calidad de vida con altos estándares. El consumo habitual de verduras, legumbres, y todos los alimentos verdes hacen parte de las dietas con fines de adelgazamiento para mejorar el cutis y de desintoxicar el cuerpo. Por ese motivo, en esta nota te contaremos algunos detalles importantes sobre la dieta verde para lograr tus propósitos de acondicionamiento físico.\r\n\r\n \r\n\r\nLas propiedades curativas de los alimentos verdes son vitales para el hígado, un órgano imprescindible para garantizar salud en nuestras vidas, sirve para depurar toxinas y asimilar correctamente las grasas. Los vegetales se caracterizan por tener cantidades idóneas de ácido fólico, magnesio y clorofila, esto contribuye al funcionamiento de la digestión del cuerpo, previenen el estreñimiento, enfermedades cardiovasculares, mejoran la visión, mantienen nuestros dientes blancos, ayudan al fortalecimiento de los músculos y huesos.\r\n\r\n ', 'omklm1v9jzq7inulidr3');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Flavia', '26262879365c97e0367229c9099cd47e'),
(2, 'Laura', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'scott', '098f6bcd4621d373cade4e832627b4f6'),
(4, 'tam', '098f6bcd4621d373cade4e832627b4f6'),
(111, 'test', '098f6bcd4621d373cade4e832627b4f6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
